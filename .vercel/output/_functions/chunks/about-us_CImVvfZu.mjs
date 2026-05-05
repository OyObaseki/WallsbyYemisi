import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_DOysf-Fi.mjs';
import { $ as $$Layout } from './Layout_DglQY64m.mjs';
import { $ as $$Header } from './Header_NYifAqJ9.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  let faqs = [];
  let aboutUsContent = "";
  try {
    faqs = await sanityClient.fetch(`*[_type == "faq"]`);
    const aboutUsData = await sanityClient.fetch(`*[_type == "aboutUs"][0]{"content": pt::text(content)}`);
    if (aboutUsData && aboutUsData.content) {
      aboutUsContent = aboutUsData.content;
    }
  } catch (error) {
    console.error("Failed to fetch from Sanity", error);
  }
  if (!faqs || faqs.length === 0) {
    faqs = [
      { question: "What materials do you use for murals?", answer: "We use high-quality, durable materials suited for various surfaces." },
      { question: "How long does a typical installation take?", answer: "Installation times vary based on project size and complexity, but most residential projects are completed within 1-2 days." },
      { question: "Do you offer custom designs?", answer: "Yes, we work closely with clients to create bespoke designs that match their vision and brand." }
    ];
  }
  if (!aboutUsContent) {
    aboutUsContent = `At Walls by Yemisi, we believe that a space is more than just four boundaries—it is a canvas for your life, your brand, and your journey. We don't just decorate environments; we curate them.

Founded on the principle that every room should speak, our mission is to blend artistic intentionality with modern design. From bespoke accent walls to immersive content backdrops, we help you transition from a standard space to an inspired one. Whether you are looking to elevate your home or create a high-impact environment for your professional brand, we bring the vision to life with precision and soul.

Your walls are talking. We just make sure they have something beautiful to say.`;
  }
  const paragraphs = aboutUsContent.split("\n\n").filter((p) => p.trim().length > 0);
  return renderTemplate(_a || (_a = __template(["", " <script lang=\"ts\">\n  document.addEventListener('astro:page-load', () => {\n    const faqButtons = document.querySelectorAll('.faq-button');\n\n    faqButtons.forEach((button) => {\n      button.addEventListener('click', () => {\n        const index = button.getAttribute('data-index');\n        const content = document.getElementById(`faq-content-${index}`);\n        const icon = button.querySelector('.faq-icon');\n\n        if (content && icon) {\n          const isHidden = content.classList.contains('hidden');\n\n          if (isHidden) {\n            content.classList.remove('hidden');\n            icon.classList.add('rotate-45');\n          } else {\n            content.classList.add('hidden');\n            icon.classList.remove('rotate-45');\n          }\n        }\n      });\n    });\n  });\n<\/script>"], ["", " <script lang=\"ts\">\n  document.addEventListener('astro:page-load', () => {\n    const faqButtons = document.querySelectorAll('.faq-button');\n\n    faqButtons.forEach((button) => {\n      button.addEventListener('click', () => {\n        const index = button.getAttribute('data-index');\n        const content = document.getElementById(\\`faq-content-\\${index}\\`);\n        const icon = button.querySelector('.faq-icon');\n\n        if (content && icon) {\n          const isHidden = content.classList.contains('hidden');\n\n          if (isHidden) {\n            content.classList.remove('hidden');\n            icon.classList.add('rotate-45');\n          } else {\n            content.classList.add('hidden');\n            icon.classList.remove('rotate-45');\n          }\n        }\n      });\n    });\n  });\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center"> <div class="text-center max-w-3xl mx-auto mb-24"> <h1 class="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-8 uppercase tracking-wider">ABOUT US</h1> <div class="text-[#666666] text-lg space-y-6"> ${paragraphs.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> </div> <!-- FAQ Section --> <div class="w-full max-w-3xl mx-auto"> <h2 class="text-3xl font-bold text-[#2D2A26] mb-8 uppercase tracking-wider text-center">FREQUENTLY ASKED QUESTIONS</h2> <div class="space-y-4"> ${faqs.map((faq, index) => renderTemplate`<div class="border border-[#EBE6DC] rounded-lg overflow-hidden bg-white"> <button class="faq-button w-full flex items-center justify-between p-6 bg-[#FCFBF8] hover:bg-[#F5F2EA] transition-colors text-left"${addAttribute(index, "data-index")}> <span class="font-medium text-[#2D2A26]">${faq.question}</span> <svg class="faq-icon w-5 h-5 text-[#D4AF37] transform transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="12" y1="5" x2="12" y2="19"></line> <line x1="5" y1="12" x2="19" y2="12"></line> </svg> </button> <div class="faq-content hidden p-6 text-[#666666] bg-white border-t border-[#EBE6DC]"${addAttribute(`faq-content-${index}`, "id")}> ${faq.answer} </div> </div>`)} </div> </div> </main> ` }));
}, "/app/src/pages/about-us.astro", void 0);

const $$file = "/app/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
