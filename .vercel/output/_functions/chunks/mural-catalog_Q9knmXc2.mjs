import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_BiL0RRI3.mjs';
import { $ as $$Layout } from './Layout_D7SbrltP.mjs';
import { $ as $$Header } from './Header_C93-YQqD.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';

const $$MuralCatalog = createComponent(async ($$result, $$props, $$slots) => {
  let categories = [];
  try {
    categories = await sanityClient.fetch(`*[_type == "catalogue"] | order(displayOrder asc) {
    title,
    description,
    "slug": slug.current,
    "image": coalesce(coverImage.asset->url, images[0].asset->url)
  }`);
  } catch (error) {
    console.error("Error fetching catalogue data:", error);
  }
  if (!categories || categories.length === 0) {
    categories = [
      {
        title: "Spring Collection 2024",
        description: "A vibrant exploration of new beginnings and colorful expressions.",
        slug: "spring-collection-2024",
        image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        displayOrder: 1
      },
      {
        title: "Monochrome Series",
        description: "A deep dive into shades of black, white, and gray.",
        slug: "monochrome-series",
        image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        displayOrder: 2
      },
      {
        title: "Natural & Landscape Design",
        description: "Bring the outdoors in with stunning natural and landscape designs.",
        slug: "natural-landscape-design",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        displayOrder: 3
      }
    ];
    categories.sort((a, b) => a.displayOrder - b.displayOrder);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-16 min-h-[60vh]"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-4 uppercase tracking-wider">Mural Catalog</h1> <p class="text-[#A39E93] text-lg max-w-2xl mx-auto">Browse our diverse mural categories designed for various spaces. Find the perfect aesthetic before requesting a quote.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${categories.map((category) => renderTemplate`<div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300"> <div class="h-64 overflow-hidden relative"> <img${addAttribute(category.image, "src")}${addAttribute(category.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"> </div> <div class="p-6 flex flex-col flex-grow"> <h2 class="text-xl font-bold text-[#2D2A26] mb-3">${category.title}</h2> <p class="text-[#A39E93] mb-6 flex-grow">${category.description}</p> <a${addAttribute(`/catalogue/${category.slug}`, "href")} class="inline-block w-full text-center bg-transparent border border-[#2D2A26] text-[#2D2A26] hover:bg-[#2D2A26] hover:text-white font-medium py-3 px-6 rounded transition-colors duration-300 uppercase tracking-wider text-sm mt-auto">
View Catalogue
</a> </div> </div>`)} </div> </main> ` })}`;
}, "/app/src/pages/mural-catalog.astro", void 0);

const $$file = "/app/src/pages/mural-catalog.astro";
const $$url = "/mural-catalog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MuralCatalog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
