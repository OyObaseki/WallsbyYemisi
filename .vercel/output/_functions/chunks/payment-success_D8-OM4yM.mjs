import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DOysf-Fi.mjs';
import { $ as $$Layout } from './Layout_DglQY64m.mjs';
import { $ as $$Header } from './Header_NYifAqJ9.mjs';

const $$PaymentSuccess = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-16 max-w-lg md:max-w-xl text-center min-h-[60vh]"> <div class="w-24 h-24 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#C59F58] mb-6 mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> </div> <h1 class="text-3xl font-bold text-[#2D2A26] mb-4">Payment Successful!</h1> <p class="text-[#A39E93] mb-8">Thank you for your purchase. We have received your order details and will be in touch shortly.</p> <a href="/" class="bg-[#C59F58] hover:bg-[#B08D4C] text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-block">
Return Home
</a> </main> ` })}`;
}, "/app/src/pages/payment-success.astro", void 0);

const $$file = "/app/src/pages/payment-success.astro";
const $$url = "/payment-success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaymentSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
