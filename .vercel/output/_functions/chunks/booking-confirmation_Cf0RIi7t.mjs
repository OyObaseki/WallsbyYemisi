import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_BiL0RRI3.mjs';
import { $ as $$Layout } from './Layout_D7SbrltP.mjs';
import { $ as $$Header } from './Header_C93-YQqD.mjs';

const $$BookingConfirmation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-24 min-h-[70vh] flex items-center justify-center"> <div class="bg-[#FDFBF7] p-10 md:p-14 rounded-2xl shadow-sm border border-[#F3EFE6] text-center max-w-2xl w-full"> <div class="w-20 h-20 bg-[#F5F2EA] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#EBE6DC]"> <svg class="w-10 h-10 text-[#C59F58]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h1 class="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-6 uppercase tracking-wider">Payment Successful!</h1> <p class="text-[#A39E93] text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
Your inspection has been scheduled. Our team will contact you shortly to confirm your appointment.
</p> <a href="/" class="inline-block bg-[#C59F58] hover:bg-[#B08D4C] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md uppercase tracking-wider text-sm">
Return to Home
</a> </div> </main> ` })}`;
}, "/app/src/pages/booking-confirmation.astro", void 0);

const $$file = "/app/src/pages/booking-confirmation.astro";
const $$url = "/booking-confirmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BookingConfirmation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
