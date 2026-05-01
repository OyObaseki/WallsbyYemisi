import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment, n as renderTransition } from './entrypoint_DOysf-Fi.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_DglQY64m.mjs';
import { $ as $$Header } from './Header_NYifAqJ9.mjs';
import { $ as $$Footer } from './Footer_Dm5lPVqQ.mjs';
import { s as sanityClient } from './sanity_D30T0eWg.mjs';
/* empty css                          */

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  try {
    products = await sanityClient.fetch(`*[_type == "product"]{
    _id,
    title,
    "description": pt::text(description),
    "imageUrl": featuredImage.asset->url
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
        // abstract sculpture
      },
      {
        _id: "mock-2",
        title: "Night Bloom",
        description: "Art Print",
        imageUrl: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        // flower art
      },
      {
        _id: "mock-3",
        title: "Golden Hour",
        description: "Mixed Media",
        imageUrl: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        // abstract shape
      },
      {
        _id: "mock-4",
        title: "Azure Deep",
        description: "Original Canvas",
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        // brush stroke
      }
    ];
  }
  let newArrivalsData = null;
  try {
    newArrivalsData = await sanityClient.fetch(`*[_type == "newArrivals"][0]{
    heading,
    subtext,
    frames[]->{
      _id,
      _type,
      title,
      "description": pt::text(description),
      "imageUrl": featuredImage.asset->url,
      "price": variants[0].price
    },
    murals[]->{
      _id,
      _type,
      title,
      "description": pt::text(description),
      "imageUrl": coalesce(images[0].asset->url, featuredImage.asset->url),
      "catalogueImageUrl": coalesce(images[0].asset->url, coverImage.asset->url),
      "slug": slug.current,
      pdfUrl,
      "price": variants[0].price
    }
  }`);
  } catch (error) {
    console.error("Error fetching new arrivals from Sanity:", error);
  }
  const newArrivalsHeading = newArrivalsData?.heading || "New Arrivals";
  const newArrivalsSubtext = newArrivalsData?.subtext || "";
  const newArrivalsFrames = newArrivalsData?.frames || products.slice(0, 3);
  const newArrivalsMurals = newArrivalsData?.murals || [];
  let trendingData = null;
  try {
    trendingData = await sanityClient.fetch(`*[_type == "trending"][0]{
    heading,
    subtext,
    frames[]->{
      _id,
      title,
      "description": pt::text(description),
      "imageUrl": featuredImage.asset->url,
      "price": variants[0].price
    }
  }`);
  } catch (error) {
    console.error("Error fetching trending from Sanity:", error);
  }
  const trendingHeading = trendingData?.heading || "Trending";
  const trendingSubtext = trendingData?.subtext || "";
  const trendingFrames = trendingData?.frames || products;
  products.length >= 3 ? products.slice(0, 3) : products;
  let heroSlides = [];
  try {
    heroSlides = await sanityClient.fetch(`*[_type == "heroSlide"]{
    heading,
    subtext,
    "imageUrl": image.asset->url,
    buttonText,
    buttonLink
  }`);
  } catch (error) {
    console.error("Error fetching hero slides from Sanity:", error);
  }
  if (!heroSlides || heroSlides.length === 0) {
    heroSlides = [
      {
        imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7bef511?q=80&w=2070&auto=format&fit=crop",
        heading: "Welcome to Walls by Yemisi",
        subtext: "We bring your walls to life.",
        buttonText: "Explore Collection",
        buttonLink: "#collections"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1499803270242-467f8f90ea2b?q=80&w=2072&auto=format&fit=crop",
        heading: "Get Customized Mural",
        subtext: "Transform your wall into a masterpiece.",
        buttonText: "Shop Now",
        buttonLink: "/mural-catalog"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
        heading: "Get Frames",
        subtext: "Discover beautiful frames for your space.",
        buttonText: "Shop Now",
        buttonLink: "/frame-catalog"
      }
    ];
  }
  let welcomeSlideIndex = heroSlides.findIndex((s) => s.heading && s.heading.includes("Welcome"));
  if (welcomeSlideIndex !== -1) {
    const welcomeSlide = heroSlides.splice(welcomeSlideIndex, 1)[0];
    heroSlides.unshift(welcomeSlide);
  }
  heroSlides.forEach((s) => {
    if (s.heading && s.heading.includes("Welcome")) {
      s.buttonText = "Explore Collection";
      s.buttonLink = "#collections";
    } else if (s.heading && s.heading.includes("Frames")) {
      s.buttonText = "Shop Now";
      s.buttonLink = "/frame-catalog";
    } else if (s.heading && (s.heading.includes("Mural") || s.heading.includes("Get Customized Mural"))) {
      s.buttonText = "Shop Now";
      s.buttonLink = "/mural-catalog";
    }
  });
  let carouselSlides = [];
  if (heroSlides.length > 0) {
    carouselSlides = [
      heroSlides[heroSlides.length - 1],
      ...heroSlides,
      heroSlides[0]
    ];
  }
  let collections = [];
  try {
    collections = await sanityClient.fetch(`*[_type == "collection"]{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);
  } catch (error) {
    console.error("Error fetching collections from Sanity:", error);
  }
  if (!collections || collections.length === 0) {
    collections = [
      {
        title: "Monochrome",
        slug: "monochrome",
        imageUrl: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Azure Deep",
        slug: "azure-deep",
        imageUrl: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Velvet Night",
        slug: "velvet-night",
        imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Terra Cotta",
        slug: "terra-cotta",
        imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];
  }
  let reviews = [];
  try {
    reviews = await sanityClient.fetch(`*[_type == "review"]{
    reviewerName,
    reviewText
  }`);
  } catch (error) {
    console.error("Error fetching reviews from Sanity:", error);
  }
  if (!reviews || reviews.length === 0) {
    reviews = [
      {
        reviewText: "Got the perfect Art piece last week",
        reviewerName: "Anton Ede"
      },
      {
        reviewText: "These guys sell the most beautiful art",
        reviewerName: "Alexis N."
      },
      {
        reviewText: "Got the perfect Art piece last week",
        reviewerName: "John D."
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="container mx-auto px-4 py-8 max-w-lg md:max-w-4xl" data-astro-cid-j7pv25f6> <!-- Featured Artist Hero --> <section class="mb-12 hero-carousel-section" data-astro-cid-j7pv25f6> <div class="relative w-full h-[500px] rounded-[32px] overflow-hidden shadow-sm" data-astro-cid-j7pv25f6> <!-- Carousel Track --> <div id="hero-carousel-track" class="flex w-full h-full transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing" data-astro-cid-j7pv25f6> ${carouselSlides.map((slide) => renderTemplate`<div class="w-full h-full flex-shrink-0 relative" data-astro-cid-j7pv25f6> <img${addAttribute(slide.imageUrl, "src")}${addAttribute(slide.heading, "alt")} draggable="false" class="w-full h-full object-cover select-none pointer-events-none" data-astro-cid-j7pv25f6> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" data-astro-cid-j7pv25f6></div> <!-- Text Content --> <div class="absolute bottom-0 left-0 p-8 w-full pointer-events-none" data-astro-cid-j7pv25f6> <p class="text-[#EBE6DC] text-xs font-semibold tracking-widest uppercase mb-2" data-astro-cid-j7pv25f6>${slide.subtext}</p> <h2 class="text-white text-4xl font-bold mb-6" data-astro-cid-j7pv25f6>${slide.heading}</h2> <a${addAttribute(slide.buttonLink, "href")} class="inline-block bg-[#C59F58] hover:bg-[#B08D4C] text-white px-8 py-3 rounded-full font-medium transition duration-300 pointer-events-auto" data-astro-cid-j7pv25f6> ${slide.buttonText} </a> </div> </div>`)} </div> </div> <!-- Slider Dots --> <div id="hero-carousel-dots" class="flex justify-center items-center gap-2 mt-4" data-astro-cid-j7pv25f6> ${heroSlides.map((_, index) => renderTemplate`<button${addAttribute(index, "data-index")}${addAttribute(`hero-dot rounded-full transition-all duration-300 ${index === 0 ? "w-6 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-[#EAE5D9]"}`, "class")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")} data-astro-cid-j7pv25f6></button>`)} </div> </section> <!-- Shop Categories Section --> <section class="mb-16" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-6" data-astro-cid-j7pv25f6> <!-- Shop Murals Frame --> <a href="/mural-catalog" class="relative w-full h-[300px] md:h-[400px] rounded-[32px] overflow-hidden group block" data-astro-cid-j7pv25f6> <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2072&auto=format&fit=crop" alt="Shop Murals" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <h2 class="text-white text-3xl md:text-5xl font-bold tracking-wide" data-astro-cid-j7pv25f6>Shop Murals</h2> </div> </a> <!-- Shop Frames Frame --> <a href="/frame-catalog" class="relative w-full h-[300px] md:h-[400px] rounded-[32px] overflow-hidden group block" data-astro-cid-j7pv25f6> <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" alt="Shop Frames" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <h2 class="text-white text-3xl md:text-5xl font-bold tracking-wide" data-astro-cid-j7pv25f6>Shop Frames</h2> </div> </a> </div> </section> <!-- Trending Section --> <section class="mb-16" data-astro-cid-j7pv25f6> <div class="flex flex-col mb-6" data-astro-cid-j7pv25f6> <div class="flex justify-between items-end" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-[#2D2A26] uppercase" data-astro-cid-j7pv25f6>${trendingHeading}</h2> </div> ${trendingSubtext && renderTemplate`<p class="text-[#A39E93] text-sm mt-1" data-astro-cid-j7pv25f6>${trendingSubtext}</p>`} </div> <div class="flex overflow-x-auto pb-4 gap-4 hide-scrollbar snap-x" data-astro-cid-j7pv25f6> ${trendingFrames.map((product) => renderTemplate`<a${addAttribute(`/product/${product._id}`, "href")} class="min-w-[200px] snap-start block group transition" data-astro-cid-j7pv25f6> <div class="bg-[#FDFBF7] rounded-[24px] p-2 flex flex-col shadow-sm border border-[#F3EFE6] h-full transition duration-300 group-hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden mb-3 bg-[#F5F2EA]" data-astro-cid-j7pv25f6> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="w-full h-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105" data-astro-cid-j7pv25f6> </div> <div class="px-2 pb-2 flex flex-col flex-grow" data-astro-cid-j7pv25f6> <h3 class="font-bold text-[#2D2A26] text-sm leading-tight mb-1" data-astro-cid-j7pv25f6>${product.title}</h3> <p class="text-[#A39E93] text-xs mb-3 flex-grow" data-astro-cid-j7pv25f6>${product.description || "Artwork"}</p> <div class="flex justify-between items-center mt-auto" data-astro-cid-j7pv25f6> <span class="text-[#C59F58] font-bold text-base" data-astro-cid-j7pv25f6>₦${product.price ? product.price.toLocaleString() : "75,000"}</span> <div class="w-6 h-6 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#C59F58]" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <line x1="12" x2="12" y1="5" y2="19" data-astro-cid-j7pv25f6></line> <line x1="5" x2="19" y1="12" y2="12" data-astro-cid-j7pv25f6></line> </svg> </div> </div> </div> </div> </a>`)} </div> </section> <!-- New Arrivals Section --> <section class="mb-16" data-astro-cid-j7pv25f6> <div class="flex flex-col mb-6" data-astro-cid-j7pv25f6> <div class="flex justify-between items-end" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-[#2D2A26]" data-astro-cid-j7pv25f6>${newArrivalsHeading}</h2> <a href="/new-arrivals" class="text-[#D4AF37] font-semibold text-sm hover:underline" data-astro-cid-j7pv25f6>See all</a> </div> ${newArrivalsSubtext && renderTemplate`<p class="text-[#A39E93] text-sm mt-1" data-astro-cid-j7pv25f6>${newArrivalsSubtext}</p>`} </div> <div class="new-arrivals-tabs flex gap-6 mb-6 border-b border-[#EAE5D9]" data-astro-cid-j7pv25f6> <button class="new-arrivals-tab active text-[#D4AF37] font-bold pb-2 border-b-2 border-[#D4AF37]" data-target="frames-grid" data-astro-cid-j7pv25f6>Frames</button> <button class="new-arrivals-tab text-[#A39E93] font-bold pb-2 hover:text-[#C59F58] transition" data-target="murals-grid" data-astro-cid-j7pv25f6>Murals</button> </div> <div id="frames-grid" class="new-arrivals-grid grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6" data-astro-cid-j7pv25f6> ${newArrivalsFrames.length === 0 ? renderTemplate`<p class="text-gray-500 col-span-full" data-astro-cid-j7pv25f6>No frames found.</p>` : newArrivalsFrames.map((product) => renderTemplate`<a${addAttribute(`/product/${product._id}`, "href")} class="block transition hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="bg-[#FDFBF7] rounded-[24px] p-2 flex flex-col shadow-sm border border-[#F3EFE6] h-full" data-astro-cid-j7pv25f6> <div class="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3 bg-[#F5F2EA]" data-astro-cid-j7pv25f6> <img${addAttribute(product.imageUrl, "src")}${addAttribute(product.title, "alt")} class="w-full h-full object-cover mix-blend-multiply" data-astro-cid-j7pv25f6> </div> <div class="px-2 pb-2 flex flex-col flex-grow" data-astro-cid-j7pv25f6> <h3 class="font-bold text-[#2D2A26] text-sm md:text-base leading-tight mb-1" data-astro-cid-j7pv25f6>${product.title}</h3> <p class="text-[#A39E93] text-xs mb-3 flex-grow" data-astro-cid-j7pv25f6>${product.description || "Frame Artwork"}</p> <div class="flex justify-between items-center mt-auto" data-astro-cid-j7pv25f6> <span class="text-[#C59F58] font-bold text-lg" data-astro-cid-j7pv25f6>₦${product.price ? product.price.toLocaleString() : "75,000"}</span> <button class="w-8 h-8 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#C59F58] hover:bg-[#EAE5D9] transition" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> <line x1="12" x2="12" y1="5" y2="19" data-astro-cid-j7pv25f6></line> <line x1="5" x2="19" y1="12" y2="12" data-astro-cid-j7pv25f6></line> </svg> </button> </div> </div> </div> </a>`)} </div> <div id="murals-grid" class="new-arrivals-grid hidden grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6" data-astro-cid-j7pv25f6> ${newArrivalsMurals.length === 0 ? renderTemplate`<p class="text-gray-500 col-span-full" data-astro-cid-j7pv25f6>No murals found.</p>` : newArrivalsMurals.map((item) => {
    const isCatalogue = item._type === "catalogue";
    const linkUrl = isCatalogue ? `/catalogue/${item.slug}` : `/product/${item._id}`;
    const displayImage = isCatalogue ? item.catalogueImageUrl : item.imageUrl;
    return renderTemplate`<a${addAttribute(linkUrl, "href")} class="block transition hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="bg-[#FDFBF7] rounded-[24px] p-2 flex flex-col shadow-sm border border-[#F3EFE6] h-full" data-astro-cid-j7pv25f6> <div class="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3 bg-[#F5F2EA]" data-astro-cid-j7pv25f6> <img${addAttribute(displayImage, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover mix-blend-multiply" data-astro-cid-j7pv25f6> ${isCatalogue && renderTemplate`<span class="absolute top-3 left-3 bg-[#C59F58] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider" data-astro-cid-j7pv25f6>
Catalogue
</span>`} </div> <div class="px-2 pb-2 flex flex-col flex-grow" data-astro-cid-j7pv25f6> <h3 class="font-bold text-[#2D2A26] text-sm md:text-base leading-tight mb-1" data-astro-cid-j7pv25f6>${item.title}</h3> <p class="text-[#A39E93] text-xs mb-3 flex-grow" data-astro-cid-j7pv25f6>${item.description || (isCatalogue ? "Mural Catalogue" : "Mural Artwork")}</p> <div class="flex justify-between items-center mt-auto" data-astro-cid-j7pv25f6> ${isCatalogue ? renderTemplate`<span class="text-[#C59F58] font-bold text-sm" data-astro-cid-j7pv25f6>View Catalogue</span>` : renderTemplate`<span class="text-[#C59F58] font-bold text-lg" data-astro-cid-j7pv25f6>₦${item.price ? item.price.toLocaleString() : "75,000"}</span>`} <button class="w-8 h-8 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#C59F58] hover:bg-[#EAE5D9] transition" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-j7pv25f6> ${isCatalogue ? renderTemplate`<path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-j7pv25f6></path>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <line x1="12" x2="12" y1="5" y2="19" data-astro-cid-j7pv25f6></line> <line x1="5" x2="19" y1="12" y2="12" data-astro-cid-j7pv25f6></line> ` })}`} </svg> </button> </div> </div> </div> </a>`;
  })} </div> </section> <!-- Collections Section --> <section id="collections" class="mb-16" data-astro-cid-j7pv25f6> <div class="flex justify-between items-end mb-6" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-[#2D2A26] uppercase" data-astro-cid-j7pv25f6>Collections</h2> </div> <div class="grid grid-cols-2 gap-4" data-astro-cid-j7pv25f6> ${collections.map((collection) => renderTemplate`<a${addAttribute(`/collections/${collection.slug}`, "href")} class="flex flex-col group transition hover:-translate-y-1" data-astro-cid-j7pv25f6> <div class="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-3 border-[6px] border-white shadow-sm" data-astro-cid-j7pv25f6> <img${addAttribute(collection.imageUrl, "src")}${addAttribute(`${collection.title} Collection`, "alt")} class="w-full h-full object-cover transition duration-500 group-hover:scale-105" data-astro-cid-j7pv25f6> </div> <h3 class="font-bold text-[#2D2A26] text-center text-lg" data-astro-cid-j7pv25f6${addAttribute(renderTransition($$result2, "7bhiq5sr", "", `collection-title-${collection.slug}`), "data-astro-transition-scope")}>${collection.title}</h3> </a>`)} </div> </section> <!-- Reviews Section --> <section class="mb-16" data-astro-cid-j7pv25f6> <div class="flex justify-between items-end mb-6" data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold text-[#2D2A26] uppercase" data-astro-cid-j7pv25f6>Reviews</h2> </div> <div class="flex overflow-x-auto pb-4 gap-4 hide-scrollbar snap-x" data-astro-cid-j7pv25f6> ${reviews.map((review) => renderTemplate`<div class="min-w-[280px] bg-[#FDFBF7] p-6 rounded-[24px] shadow-sm snap-center border border-[#F3EFE6]" data-astro-cid-j7pv25f6> <p class="text-[#333333] mb-4 text-lg font-medium leading-tight" data-astro-cid-j7pv25f6>${review.reviewText}</p> <p class="text-right font-bold text-[#2D2A26]" data-astro-cid-j7pv25f6>- ${review.reviewerName}</p> </div>`)} </div> </section> </main>  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })}  ${renderScript($$result2, "/app/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/app/src/pages/index.astro", "self");

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
