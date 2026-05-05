import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_DOysf-Fi.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DglQY64m.mjs';
import { $ as $$Header } from './Header_NYifAqJ9.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';

async function getStaticPaths() {
  let products = [];
  try {
    products = await sanityClient.fetch(`*[_type == "product"]{
      _id,
      title,
      "description": pt::text(description),
      "imageUrl": featuredImage.asset->url,
      variants
    }`);
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
  }
  if (!products || products.length === 0) {
    products = [
      {
        _id: "mock-1",
        title: "Queen of Orisun",
        description: "Original Canvas",
        imageUrl: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        _id: "mock-2",
        title: "Night Bloom",
        description: "Art Print",
        imageUrl: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        _id: "mock-3",
        title: "Golden Hour",
        description: "Mixed Media",
        imageUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        _id: "mock-4",
        title: "Azure Deep",
        description: "Original Canvas",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        variants: [
          { title: "20x30 Frameless", price: 75e3 },
          { title: "20x30 Framed", price: 83e3 },
          { title: "24x36 Frameless", price: 85e3 },
          { title: "24x36 Framed", price: 95e3 },
          { title: "27x42 Frameless", price: 95e3 },
          { title: "27x42 Framed", price: 11e4 },
          { title: "36x48 Frameless", price: 105e3 },
          { title: "36x48 Framed", price: 12e4 }
        ]
      }
    ];
  }
  return products.map((product) => ({
    params: { id: product._id },
    props: { product }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { product } = Astro2.props;
  let pricing = {
    "20x30": { frameless: 75e3, framed: 83e3 },
    "24x36": { frameless: 85e3, framed: 95e3 },
    "27x42": { frameless: 95e3, framed: 11e4 },
    "36x48": { frameless: 105e3, framed: 12e4 }
  };
  if (product.variants && Array.isArray(product.variants)) {
    const dynamicPricing = {};
    product.variants.forEach((v) => {
      if (v.title && v.price) {
        const parts = v.title.toLowerCase().split(" ");
        if (parts.length >= 2) {
          const size = parts[0];
          const frame = parts[1];
          if (!dynamicPricing[size]) {
            dynamicPricing[size] = {};
          }
          dynamicPricing[size][frame] = v.price;
        }
      }
    });
    if (Object.keys(dynamicPricing).length > 0) {
      pricing = dynamicPricing;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-lg md:max-w-4xl"> <div class="flex flex-col md:flex-row gap-8 items-start"> <div class="w-full md:w-1/2"> <div class="relative w-full rounded-[32px] overflow-hidden shadow-sm bg-[#F5F2EA]"> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="w-full h-auto object-cover mix-blend-multiply"> </div> </div> <div class="w-full md:w-1/2 flex flex-col"> <h1 class="text-3xl font-bold text-[#2D2A26] mb-2">${product.title}</h1> <p class="text-[#A39E93] text-lg mb-6">${product.description || "Artwork"}</p> <div class="mb-6"> <h3 class="font-semibold text-[#2D2A26] mb-3">Size</h3> <div class="flex flex-wrap gap-3" id="size-options"> <button class="px-4 py-2 border-2 border-[#D4AF37] bg-[#F5F2EA] text-[#2D2A26] rounded-full font-medium transition size-btn active" data-size="20x30">20x30</button> <button class="px-4 py-2 border-2 border-[#EBE6DC] text-[#A39E93] hover:border-[#D4AF37] rounded-full font-medium transition size-btn" data-size="24x36">24x36</button> <button class="px-4 py-2 border-2 border-[#EBE6DC] text-[#A39E93] hover:border-[#D4AF37] rounded-full font-medium transition size-btn" data-size="27x42">27x42</button> <button class="px-4 py-2 border-2 border-[#EBE6DC] text-[#A39E93] hover:border-[#D4AF37] rounded-full font-medium transition size-btn" data-size="36x48">36x48</button> </div> </div> <div class="mb-8"> <h3 class="font-semibold text-[#2D2A26] mb-3">Frame</h3> <div class="flex flex-wrap gap-3" id="frame-options"> <button class="px-6 py-2 border-2 border-[#D4AF37] bg-[#F5F2EA] text-[#2D2A26] rounded-full font-medium transition frame-btn active" data-frame="frameless">Frameless</button> <button class="px-6 py-2 border-2 border-[#EBE6DC] text-[#A39E93] hover:border-[#D4AF37] rounded-full font-medium transition frame-btn" data-frame="framed">Framed</button> </div> </div> <div class="mt-auto border-t border-[#EBE6DC] pt-6 flex flex-col gap-6"> <div> <p class="text-[#A39E93] text-sm mb-1" id="measurement-display">20x30 Inches</p> <span class="text-[#C59F58] font-bold text-3xl" id="price-display">₦75,000</span> </div> <div id="pricing-data"${addAttribute(JSON.stringify(pricing), "data-pricing")} hidden></div> <div class="flex flex-row gap-4 w-full"> <button id="add-to-cart-btn" class="flex-1 flex items-center justify-center border-2 border-[#C59F58] text-[#C59F58] hover:bg-[#F5F2EA] px-8 py-3 rounded-full font-medium transition duration-300"${addAttribute(product._id, "data-product-id")}${addAttribute(product.title, "data-product-title")}${addAttribute(product.imageUrl, "data-product-image")}>
Add to Cart
</button> <button id="buy-now-btn" class="flex-1 flex items-center justify-center bg-[#C59F58] hover:bg-[#B08D4C] text-white px-8 py-3 rounded-full font-medium transition duration-300"${addAttribute(product._id, "data-product-id")}${addAttribute(product.title, "data-product-title")}${addAttribute(product.imageUrl, "data-product-image")}>
Buy Now
</button> </div> </div> </div> </div> </main> ${renderScript($$result2, "/app/src/pages/product/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/app/src/pages/product/[id].astro", void 0);
const $$file = "/app/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
