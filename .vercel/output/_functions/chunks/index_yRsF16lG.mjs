import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_BiL0RRI3.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_D7SbrltP.mjs';
import { $ as $$Header } from './Header_C93-YQqD.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-lg md:max-w-4xl min-h-[60vh]"> <h1 class="text-3xl font-bold text-[#2D2A26] mb-8 uppercase">Your Cart</h1> <div id="cart-container" class="hidden"> <div id="cart-items" class="flex flex-col gap-6 mb-8"> <!-- Cart items will be rendered here by JS --> </div> <div class="border-t border-[#EBE6DC] pt-6 mb-8"> <div class="flex justify-between items-end"> <span class="text-lg font-medium text-[#2D2A26]">Total</span> <span class="text-[#C59F58] font-bold text-3xl" id="cart-total">₦0</span> </div> </div> <div class="flex flex-col sm:flex-row justify-between gap-4"> <a href="/" class="border-2 border-[#C59F58] text-[#C59F58] hover:bg-[#F5F2EA] px-8 py-3 rounded-full font-medium transition duration-300 text-center">
Continue Shopping
</a> <button id="checkout-btn" class="bg-[#C59F58] hover:bg-[#B08D4C] text-white px-8 py-3 rounded-full font-medium transition duration-300 text-center">
Checkout
</button> </div> </div> <div id="empty-cart-message" class="hidden flex-col items-center justify-center py-16"> <div class="w-24 h-24 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#A39E93] mb-6"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path> <path d="M3 6h18"></path> <path d="M16 10a4 4 0 0 1-8 0"></path> </svg> </div> <h2 class="text-2xl font-bold text-[#2D2A26] mb-2">Your cart is empty</h2> <p class="text-[#A39E93] mb-8 text-center max-w-sm">Looks like you haven't added any beautiful artworks to your cart yet.</p> <a href="/" class="bg-[#C59F58] hover:bg-[#B08D4C] text-white px-8 py-3 rounded-full font-medium transition duration-300">
Start Shopping
</a> </div> </main> ` })} ${renderScript($$result, "/app/src/pages/cart/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/src/pages/cart/index.astro", void 0);

const $$file = "/app/src/pages/cart/index.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
