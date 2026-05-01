import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_BiL0RRI3.mjs';
import 'clsx';
import { r as renderScript } from './Layout_D7SbrltP.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Shop Murals", href: "/mural-catalog" },
    { label: "About Us", href: "/about-us" },
    { label: "Schedule Inspection", href: "/schedule-inspection" },
    { label: "Contact Us", href: "/contact-us" }
  ];
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };
  return renderTemplate`${maybeRenderHead()}<header class="relative bg-[#FCFBF8] border-b border-[#EBE6DC] z-50"> <div class="flex items-center justify-between px-6 py-6"> <!-- Logo --> <div class="flex items-center gap-4"> <a href="/" class="text-xl font-bold tracking-tight text-[#2D2A26]">WallsbyYemisi</a> </div> <!-- Desktop Menu --> <nav class="hidden lg:flex items-center gap-6"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`text-sm font-medium transition-colors hover:text-[#D4AF37] ${isActive(item.href) ? "text-[#D4AF37]" : "text-[#333333]"}`, "class")}> ${item.label} </a>`)} </nav> <!-- Icons & Mobile Menu Button --> <div class="flex items-center gap-4"> <!-- Cart --> <a href="/cart" class="w-10 h-10 rounded-full bg-[#2D2A26] flex items-center justify-center text-[#F5F2EA] hover:bg-black transition relative" aria-label="Cart"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path> <path d="M3 6h18"></path> <path d="M16 10a4 4 0 0 1-8 0"></path> </svg> <span class="cart-badge absolute -top-1 -right-1 bg-[#D4AF37] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center hidden">0</span> </a> <!-- Mobile Hamburger --> <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#333333] hover:bg-[#EAE5D9] transition" aria-label="Menu"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> </svg> </button> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu-overlay" class="lg:hidden fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300"></div> <!-- Mobile Menu Slide-out Panel --> <div id="mobile-menu-panel" class="lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 bg-[#FCFBF8] shadow-2xl flex flex-col translate-x-full transition-transform duration-300"> <div class="flex items-center justify-between px-6 py-6 border-b border-[#EBE6DC]"> <span class="text-xl font-bold tracking-tight text-[#2D2A26]">WallsbyYemisi</span> <button id="mobile-close-btn" class="w-10 h-10 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#333333] hover:bg-[#EAE5D9] transition" aria-label="Close Menu"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> </div> <nav class="flex flex-col px-6 py-8 space-y-6 overflow-y-auto"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`text-lg font-medium transition-colors hover:text-[#D4AF37] ${isActive(item.href) ? "text-[#D4AF37]" : "text-[#333333]"}`, "class")}> ${item.label} </a>`)} </nav> </div> </header> ${renderScript($$result, "/app/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/src/components/Header.astro", void 0);

export { $$Header as $ };
