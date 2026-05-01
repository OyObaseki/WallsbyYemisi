import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_DOysf-Fi.mjs';
import { $ as $$Layout } from './Layout_DglQY64m.mjs';
import { $ as $$Header } from './Header_NYifAqJ9.mjs';
import { $ as $$Footer } from './Footer_Dm5lPVqQ.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function getStaticPaths() {
  let paths = [];
  try {
    const catalogues = await sanityClient.fetch(`*[_type == "catalogue"]{
      "slug": slug.current
    }`);
    if (catalogues && catalogues.length > 0) {
      paths = catalogues.map((cat) => ({
        params: { slug: cat.slug }
      }));
    }
  } catch (error) {
    console.error("Error fetching catalogue paths:", error);
  }
  paths.push(
    { params: { slug: "spring-collection-2024" } },
    { params: { slug: "monochrome-series" } }
  );
  const uniquePaths = Array.from(new Set(paths.map((p) => p.params.slug))).map((slug) => ({ params: { slug } }));
  return uniquePaths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let catalogueData = null;
  try {
    catalogueData = await sanityClient.fetch(`*[_type == "catalogue" && slug.current == $slug][0]{
    title,
    description,
    "images": images[].asset->url,
    "pdfUrl": pdfUrl.asset->url
  }`, { slug });
  } catch (error) {
    console.error("Error fetching catalogue data:", error);
  }
  if (!catalogueData) {
    const allMockCatalogues = {
      "spring-collection-2024": {
        title: "Spring Collection 2024",
        description: "A vibrant exploration of new beginnings and colorful expressions. This collection features works that embrace the light and energy of the spring season.",
        images: [
          "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      "monochrome-series": {
        title: "Monochrome Series",
        description: "A deep dive into shades of black, white, and gray. These pieces focus on texture and form over color.",
        images: [
          "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    };
    catalogueData = allMockCatalogues[slug] || allMockCatalogues["spring-collection-2024"];
  }
  return renderTemplate(_a || (_a = __template(["", ` <script lang="ts">
  function setupModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    const closeModalBtn = document.getElementById('closeModalBtn');
    const triggers = document.querySelectorAll('[data-modal-trigger]');

    if (!modal || !modalImage || !closeModalBtn) return;

    // Open modal
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const src = (e.currentTarget as HTMLElement).getAttribute('data-image-src');
        if (src) {
          modalImage.src = src;
          modal.classList.remove('opacity-0', 'pointer-events-none');
          // Add a slight delay for the zoom effect to happen after modal becomes visible
          setTimeout(() => {
            modalImage.classList.remove('scale-95');
            modalImage.classList.add('scale-100');
          }, 50);
          document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
      });
    });

    // Close modal function
    const closeModal = () => {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalImage.classList.remove('scale-100');
      modalImage.classList.add('scale-95');
      document.body.style.overflow = ''; // Restore scrolling
      // Optional: Clear src after animation completes to reset state
      setTimeout(() => {
        if (modal.classList.contains('opacity-0')) {
          modalImage.src = '';
        }
      }, 300);
    };

    // Close on button click
    closeModalBtn.addEventListener('click', closeModal);

    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('opacity-0')) {
        closeModal();
      }
    });
  }

  function setupQuoteForm() {
    const quoteForm = document.getElementById('quoteForm') as HTMLFormElement;
    const quoteSuccessMessage = document.getElementById('quoteSuccessMessage');

    if (quoteForm && quoteSuccessMessage) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        quoteForm.classList.add('hidden');
        quoteSuccessMessage.classList.remove('hidden');
      });
    }
  }

  // Setup on initial load and subsequent navigations (View Transitions)
  document.addEventListener('astro:page-load', () => {
    setupModal();
    setupQuoteForm();
  });
<\/script>`])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-16 min-h-[60vh] max-w-lg md:max-w-6xl"> <!-- SECTION 1 — Header --> <section class="mb-16 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4 uppercase tracking-wider">${catalogueData.title}</h1> <p class="text-[#A39E93] text-lg max-w-2xl mx-auto mb-4">${catalogueData.description}</p> <div class="inline-block bg-[#F5F2EA] text-[#C59F58] px-4 py-2 rounded-full text-sm font-medium"> ${catalogueData.images ? catalogueData.images.length : 0} Designs Available
</div> </section> <!-- SECTION 2 — Image Grid --> <section class="mb-16"> ${catalogueData.images && catalogueData.images.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"> ${catalogueData.images.map((imgSrc, index) => renderTemplate`<div class="relative w-full aspect-square rounded-[20px] overflow-hidden bg-[#F5F2EA] group cursor-pointer" data-modal-trigger${addAttribute(imgSrc, "data-image-src")}> <img${addAttribute(imgSrc, "src")}${addAttribute(`${catalogueData.title} - Image ${index + 1}`, "alt")} class="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-500 text-xl py-12">No images available for this catalogue.</p>`} </section> <!-- SECTION 3 — Below Image Grid --> ${catalogueData.pdfUrl && renderTemplate`<section class="text-center py-8"> <h3 class="text-2xl font-bold text-[#2D2A26] mb-6">View more of this catalogue</h3> <a${addAttribute(`/catalogue/${slug}/pdf`, "href")} class="inline-flex items-center justify-center bg-[#2D2A26] text-white font-medium py-4 px-8 rounded-full hover:bg-[#C59F58] transition-colors duration-300 uppercase tracking-wider text-sm">
View Full Catalogue (PDF)
</a> </section>`} <!-- SECTION 4 — Get Quote Form --> <section id="quote" class="mt-16 bg-[#F5F2EA] p-8 md:p-12 rounded-[32px]"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-10"> <h3 class="text-3xl font-bold text-[#2D2A26] mb-4">Get Quote</h3> <p class="text-[#A39E93]">Interested in our designs? Request a custom quote below.</p> </div> <div id="quoteSuccessMessage" class="hidden bg-green-50 text-green-800 p-6 rounded-2xl text-center border border-green-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h4 class="text-xl font-bold mb-2">Thank you!</h4> <p>We will contact you shortly with your quote.</p> </div> <form id="quoteForm" class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="col-span-1 md:col-span-2"> <label for="fullName" class="block text-sm font-medium text-[#2D2A26] mb-2">Full Name</label> <input type="text" id="fullName" name="fullName" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div> <label for="phoneNumber" class="block text-sm font-medium text-[#2D2A26] mb-2">Phone Number</label> <input type="tel" id="phoneNumber" name="phoneNumber" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div> <label for="emailAddress" class="block text-sm font-medium text-[#2D2A26] mb-2">Email Address</label> <input type="email" id="emailAddress" name="emailAddress" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div> <label for="location" class="block text-sm font-medium text-[#2D2A26] mb-2">Location (City)</label> <input type="text" id="location" name="location" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div> <label for="spaceType" class="block text-sm font-medium text-[#2D2A26] mb-2">Type of Space</label> <select id="spaceType" name="spaceType" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors appearance-none"> <option value="" disabled selected>Select a space type</option> <option value="Restaurant & Food Design">Restaurant & Food Design</option> <option value="Health & Fitness Design">Health & Fitness Design</option> <option value="Brand & Commercial Spaces Design">Brand & Commercial Spaces Design</option> <option value="Retail, Saloon & Fashion Design">Retail, Saloon & Fashion Design</option> <option value="Natural & Landscape Design">Natural & Landscape Design</option> </select> </div> <div> <label for="wallWidth" class="block text-sm font-medium text-[#2D2A26] mb-2">Wall Size (Width in Feet)</label> <input type="number" id="wallWidth" name="wallWidth" min="0" step="0.1" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div> <label for="wallHeight" class="block text-sm font-medium text-[#2D2A26] mb-2">Wall Size (Height in Feet)</label> <input type="number" id="wallHeight" name="wallHeight" min="0" step="0.1" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"> </div> <div class="col-span-1 md:col-span-2"> <label for="projectDescription" class="block text-sm font-medium text-[#2D2A26] mb-2">Description of Project</label> <textarea id="projectDescription" name="projectDescription" rows="4" required class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#C59F58] focus:ring-1 focus:ring-[#C59F58] bg-white transition-colors"></textarea> </div> <div class="col-span-1 md:col-span-2"> <label for="referenceImage" class="block text-sm font-medium text-[#2D2A26] mb-2">Upload Reference Image (optional)</label> <input type="file" id="referenceImage" name="referenceImage" accept="image/*" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#EAE5D9] file:text-[#D4AF37] hover:file:bg-[#D4AF37] hover:file:text-white transition-colors cursor-pointer border border-gray-300 rounded px-4 py-2 bg-white"> </div> <div class="col-span-1 md:col-span-2 mt-4"> <button type="submit" class="w-full bg-[#2D2A26] text-white font-medium py-4 px-8 rounded-full hover:bg-[#C59F58] transition-colors duration-300 uppercase tracking-wider text-sm">
Request Quote
</button> </div> </form> </div> </section> </main>  <div id="imageModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 opacity-0 pointer-events-none transition-opacity duration-300"> <button id="closeModalBtn" class="absolute top-6 right-6 text-white hover:text-[#C59F58] transition-colors z-50"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg> </button> <div class="relative w-full h-full p-4 md:p-12 flex items-center justify-center"> <img id="modalImage" src="" alt="Fullscreen view" class="max-w-full max-h-full object-contain drop-shadow-2xl scale-95 transition-transform duration-300"> </div> </div>  ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "/app/src/pages/catalogue/[slug].astro", void 0);

const $$file = "/app/src/pages/catalogue/[slug].astro";
const $$url = "/catalogue/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
