1. **Fix client-side script error in `src/pages/catalogue/[slug].astro`:**
   - The `<script lang="ts">` contains TypeScript type assertions (`as HTMLImageElement`, `as HTMLElement`, `as HTMLFormElement`, `as HTMLButtonElement`).
   - This causes a `SyntaxError: Unexpected identifier 'as'` in the browser because the code isn't being transpiled to JS correctly (possibly because of Astro config or `is:inline` implicitly happening). Wait, if I look closely, the `<script>` doesn't have `is:inline`. But the browser throws `BROWSER ERROR: Unexpected identifier 'as'`.
   - By removing the TypeScript assertions and `lang="ts"` and using standard JS, the script will execute successfully, attaching the `submit` event listener to the form.
   - This will stop the form from defaulting to a GET request and properly send the POST request via `fetch()`.

2. **Fix `src/pages/api/send-email.ts` error handling & API check:**
   - The user mentioned they get `{"error":"Failed to send email"}`. This indicates that `transporter.sendMail()` is throwing an error. This is likely because the SMTP server they are using requires TLS or has specific port requirements, or the from/to addresses are rejected, etc.
   - We should add more robust logging to the `catch (error)` block in the endpoint to help the user debug their SMTP issues (e.g., logging `error.message`), but we shouldn't necessarily "fix" their SMTP server if it's external.
   - However, we can also ensure that the `SMTP_PORT` parsing handles port `465` (secure: true) vs `587` (secure: false). Currently: `secure: Number(smtpPort) === 465`. This is mostly standard for nodemailer.
   - Actually, there's another bug: The form submits a file upload. `const formData = new FormData(quoteForm);`. The payload is being converted to JSON:
     ```js
     const payload = {
       formType: 'quote',
       // ...
       referenceImage: formData.get('referenceImage') // This is a File object!
     };
     body: JSON.stringify(payload)
     ```
     You cannot `JSON.stringify` a `File` object! It becomes `{}`.
     The endpoint expects multipart/form-data for attachments!
     Let's look at `src/pages/api/send-email.ts`:
     ```ts
     } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
       // handles form data and files
     }
     ```
     So the frontend SHOULD NOT send JSON. It should send the `FormData` directly so that the file attachment works.

3. **Complete Pre-commit Steps:**
   - Call `pre_commit_instructions` tool to run and check.

4. **Submit changes**
   - Submit the fixes.
