import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BiL0RRI3.mjs';
import { $ as $$Layout } from './Layout_D7SbrltP.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';

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
const $$Pdf = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Pdf;
  const { slug } = Astro2.params;
  let catalogueData = null;
  try {
    catalogueData = await sanityClient.fetch(`*[_type == "catalogue" && slug.current == $slug][0]{
    "pdfUrl": pdfUrl.asset->url
  }`, { slug });
  } catch (error) {
    console.error("Error fetching catalogue data:", error);
  }
  if (!catalogueData) {
    const allMockCatalogues = {
      "spring-collection-2024": {
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      },
      "monochrome-series": {
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }
    };
    catalogueData = allMockCatalogues[slug] || allMockCatalogues["spring-collection-2024"];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-screen w-full flex flex-col bg-[#F5F2EA]"> <!-- Header with Back Button --> <header class="flex items-center px-4 py-4 md:px-8 shadow-sm bg-white shrink-0"> <a${addAttribute(`/catalogue/${slug}#quote`, "href")} class="inline-flex items-center gap-2 text-[#2D2A26] hover:text-[#C59F58] font-medium transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="19" y1="12" x2="5" y2="12"></line> <polyline points="12 19 5 12 12 5"></polyline> </svg>
Back
</a> <div class="flex-1 text-center"> <h1 class="text-xl font-bold text-[#2D2A26] uppercase tracking-wider hidden md:block">Catalogue PDF Viewer</h1> </div> <div class="w-16 md:w-24"></div> <!-- Spacer for centering title --> </header> <!-- PDF Viewer --> <div class="flex-1 w-full h-full relative overflow-hidden"> ${catalogueData?.pdfUrl ? renderTemplate`<object${addAttribute(catalogueData.pdfUrl, "data")} type="application/pdf" class="w-full h-full absolute inset-0 border-none"${addAttribute(`Catalogue PDF for ${slug}`, "title")}> <div class="flex flex-col items-center justify-center h-full p-8 text-center bg-white"> <p class="mb-4 text-[#2D2A26]">Your browser doesn't support embedded PDFs.</p> <a${addAttribute(catalogueData.pdfUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-[#2D2A26] text-white font-medium py-3 px-6 rounded-full hover:bg-[#C59F58] transition-colors duration-300">
Download PDF instead
</a> </div> </object>` : renderTemplate`<div class="flex flex-col items-center justify-center h-full p-8 text-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-[#A39E93] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> <h2 class="text-2xl font-bold text-[#2D2A26] mb-2">PDF Not Found</h2> <p class="text-[#A39E93] max-w-md">Sorry, we couldn't load the PDF for this catalogue. It may not exist or has been moved.</p> </div>`} </div> </main> ` })}`;
}, "/app/src/pages/catalogue/[slug]/pdf.astro", void 0);

const $$file = "/app/src/pages/catalogue/[slug]/pdf.astro";
const $$url = "/catalogue/[slug]/pdf";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pdf,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
