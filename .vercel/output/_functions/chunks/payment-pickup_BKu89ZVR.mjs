import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead, h as addAttribute, n as renderTransition } from './entrypoint_BiL0RRI3.mjs';
import { r as renderScript, $ as $$Layout } from './Layout_D7SbrltP.mjs';
import { $ as $$Header } from './Header_C93-YQqD.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PaymentPickup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PaymentPickup;
  const paystackPublicKey = undefined                                   ;
  return renderTemplate(_a || (_a = __template(["", ' <script src="https://js.paystack.co/v1/inline.js"></script> ', ""])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-12 max-w-lg md:max-w-2xl min-h-[60vh]"> <div id="paystack-pk"${addAttribute(paystackPublicKey, "data-key")} hidden></div> <div class="text-center mb-10"> <h1 class="text-4xl font-bold text-[#C59F58] mb-2 uppercase tracking-wide">Payment</h1> <p class="text-[#A39E93] text-lg font-medium">Complete your order details below</p> </div> <!-- Toggle Delivery / Pick Up --> <div class="flex justify-center mb-10"> <div class="bg-[#F5F2EA] p-1 rounded-full flex relative w-full max-w-[300px]"> <div class="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#C59F58] rounded-full translate-x-[100%]"${addAttribute(renderTransition($$result2, "ctbyhta5", "", "payment-toggle-highlight"), "data-astro-transition-scope")}></div> <a href="/payment" class="flex-1 text-[#A39E93] hover:text-[#2D2A26] relative z-10 py-3 rounded-full font-medium text-center transition-colors duration-300 block">Delivery</a> <span class="flex-1 text-white relative z-10 py-3 rounded-full font-medium text-center">Pick Up</span> </div> </div> <form id="checkout-form" class="space-y-10"> <!-- Customer Information Section --> <section> <h2 class="text-xl font-bold text-[#2D2A26] mb-6">Customer Information</h2> <div class="space-y-4"> <div> <label class="sr-only" for="fullName">Full Name</label> <input type="text" id="fullName" name="fullName" placeholder="Enter full name" required class="w-full px-5 py-4 bg-[#FDFBF7] border border-[#EBE6DC] rounded-xl focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] transition"> </div> <div> <label class="sr-only" for="email">Email Address</label> <input type="email" id="email" name="email" placeholder="Enter email address" required class="w-full px-5 py-4 bg-[#FDFBF7] border border-[#EBE6DC] rounded-xl focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] transition"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="sr-only" for="phone">Phone Number</label> <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required class="w-full px-5 py-4 bg-[#FDFBF7] border border-[#EBE6DC] rounded-xl focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] transition"> </div> <div> <label class="sr-only" for="altPhone">Alternate Phone Number</label> <input type="tel" id="altPhone" name="altPhone" placeholder="Enter alternate phone number" class="w-full px-5 py-4 bg-[#FDFBF7] border border-[#EBE6DC] rounded-xl focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] transition"> </div> </div> </div> </section> <!-- Pick Up Note Section --> <section id="pickup-note-section"> <div class="bg-[#F5F2EA] border border-[#EBE6DC] rounded-xl p-4 flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A39E93] mt-0.5 flex-shrink-0"> <circle cx="12" cy="12" r="10"></circle> <line x1="12" x2="12" y1="8" y2="12"></line> <line x1="12" x2="12.01" y1="16" y2="16"></line> </svg> <p class="text-[#A39E93] text-sm leading-relaxed">Pick Up selected. Pick up location details will be shared after payment confirmation.</p> </div> </section> <!-- Order Summary Section --> <section> <h2 class="text-xl font-bold text-[#2D2A26] mb-6">Order Summary</h2> <div class="bg-[#FDFBF7] border border-[#F3EFE6] shadow-sm rounded-3xl p-6"> <div id="order-items" class="space-y-4 mb-6"> <!-- Order items will be populated by JS --> </div> <div class="border-t border-[#EBE6DC] pt-6 flex justify-between items-end"> <span class="text-lg font-medium text-[#2D2A26]">Estimated Total:</span> <span class="text-[#2D2A26] font-bold text-2xl" id="order-total">₦0</span> </div> </div> </section> <!-- Pay Now Button --> <button type="submit" id="pay-now-btn" class="w-full bg-[#C59F58] hover:bg-[#B08D4C] text-white py-4 rounded-full font-bold text-lg transition duration-300 transform active:scale-[0.98]">
Pay Now
</button> <div id="payment-error" class="hidden mt-4 text-red-500 text-center font-medium"></div> </form> </main> ` }), renderScript($$result, "/app/src/pages/payment-pickup.astro?astro&type=script&index=0&lang.ts"));
}, "/app/src/pages/payment-pickup.astro", "self");
const $$file = "/app/src/pages/payment-pickup.astro";
const $$url = "/payment-pickup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PaymentPickup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
