import { c as createComponent } from './astro-component_DaxBLt9h.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderTransition } from './entrypoint_BiL0RRI3.mjs';
import { $ as $$Layout } from './Layout_D7SbrltP.mjs';
import { $ as $$Header } from './Header_C93-YQqD.mjs';
import { $ as $$Footer } from './Footer_cNfD0S-t.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';
/* empty css                          */

async function getStaticPaths() {
  let collections = [];
  try {
    collections = await sanityClient.fetch(`*[_type == "collection"]{
      "slug": slug.current,
      "name": title
    }`);
  } catch (error) {
    console.error("Error fetching collections for paths:", error);
  }
  if (!collections || collections.length === 0) {
    collections = [
      { slug: "monochrome", name: "Monochrome" },
      { slug: "azure-deep", name: "Azure Deep" },
      { slug: "velvet-night", name: "Velvet Night" },
      { slug: "terra-cotta", name: "Terra Cotta" }
    ];
  }
  return collections.map((collection) => {
    return {
      params: { slug: collection.slug },
      props: { name: collection.name }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { name } = Astro2.props;
  let products = [];
  try {
    products = await sanityClient.fetch(`*[_type == "product" && (collection->slug.current == $slug || _id in *[_type == "collection" && slug.current == $slug][0].frames[]._ref)]{
    _id,
    title,
    "description": pt::text(description),
    "imageUrl": featuredImage.asset->url,
    "price": variants[0].price
  }`, { slug });
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
  }
  if (!products || products.length === 0) {
    const allMockProducts = [
      {
        _id: "mock-1",
        title: "Queen of Orisun",
        description: "Original Canvas",
        imageUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        collection: "monochrome",
        price: 75e3
      },
      {
        _id: "mock-2",
        title: "Night Bloom",
        description: "Art Print",
        imageUrl: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        collection: "azure-deep",
        price: 75e3
      },
      {
        _id: "mock-3",
        title: "Golden Hour",
        description: "Mixed Media",
        imageUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        collection: "velvet-night",
        price: 75e3
      },
      {
        _id: "mock-4",
        title: "Azure Deep",
        description: "Original Canvas",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        collection: "terra-cotta",
        price: 75e3
      }
    ];
    products = allMockProducts.filter((p) => p.collection === slug);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-lg md:max-w-4xl min-h-[60vh]"> <div class="mb-8"> <a href="/" class="text-[#D4AF37] hover:underline flex items-center gap-2 mb-4 text-sm font-medium"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m15 18-6-6 6-6"></path> </svg>
Back to Home
</a> <h1 class="text-4xl font-bold text-[#2D2A26] capitalize"${addAttribute(renderTransition($$result2, "amad5n6q", "", `collection-title-${slug}`), "data-astro-transition-scope")}>${name}</h1> </div> ${products.length === 0 ? renderTemplate`<p class="text-center text-gray-500 text-xl py-12">No products found in this collection.</p>` : renderTemplate`<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6"> ${products.map((product) => renderTemplate`<a${addAttribute(`/product/${product._id}`, "href")} class="block transition hover:-translate-y-1"> <div class="bg-[#FDFBF7] rounded-[24px] p-2 flex flex-col shadow-sm border border-[#F3EFE6] h-full"> <div class="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3 bg-[#F5F2EA]"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="w-full h-full object-cover mix-blend-multiply"> </div> <div class="px-2 pb-2 flex flex-col flex-grow"> <h3 class="font-bold text-[#2D2A26] text-sm md:text-base leading-tight mb-1">${product.title}</h3> <p class="text-[#A39E93] text-xs mb-3 flex-grow">${product.description || "Artwork"}</p> <div class="flex justify-between items-center mt-auto"> <span class="text-[#C59F58] font-bold text-lg">₦${product.price ? product.price.toLocaleString() : "75,000"}</span> <button class="w-8 h-8 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#C59F58] hover:bg-[#EAE5D9] transition"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="12" x2="12" y1="5" y2="19"></line> <line x1="5" x2="19" y1="12" y2="12"></line> </svg> </button> </div> </div> </div> </a>`)} </div>`} </main>  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/app/src/pages/collections/[slug].astro", "self");

const $$file = "/app/src/pages/collections/[slug].astro";
const $$url = "/collections/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
