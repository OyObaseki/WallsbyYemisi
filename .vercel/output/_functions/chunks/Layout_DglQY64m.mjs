import { c as createComponent } from './astro-component_BdPxmIoZ.mjs';
import 'piccolore';
import { p as createRenderInstruction, h as addAttribute, r as renderTemplate, q as renderSlot, v as renderHead, l as renderComponent } from './entrypoint_DOysf-Fi.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"', '><title>WallsByYemisi</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">', "", `</head> <body class="bg-[#FCFBF8] text-[#333333] font-['Plus_Jakarta_Sans',_sans-serif]" data-astro-cid-sckkx6r4> <!-- Global Cart Notification Popup --> <div id="cart-notification" class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#2D2A26] text-[#F5F2EA] px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-3 transition-all duration-300 transform -translate-y-24 opacity-0 pointer-events-none touch-none select-none" style="touch-action: none;" data-astro-cid-sckkx6r4> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sckkx6r4> <path d="M20 6 9 17l-5-5" data-astro-cid-sckkx6r4></path> </svg>
Added to Cart
</div> `, ` <script lang="ts">
			function updateCartBadge() {
				const badges = document.querySelectorAll('.cart-badge');
				if (badges.length === 0) return;

				let cart = [];
				try {
					const savedCart = localStorage.getItem('cart');
					if (savedCart) {
						cart = JSON.parse(savedCart);
					}
				} catch (error) {
					console.error('Error parsing cart from localStorage', error);
				}

				let totalQuantity = 0;
				cart.forEach((item) => {
					totalQuantity += item.quantity || 1;
				});

				badges.forEach((badge) => {
					if (totalQuantity > 0) {
						badge.textContent = totalQuantity.toString();
						badge.classList.remove('hidden');
					} else {
						badge.classList.add('hidden');
					}
				});
			}

			let notificationTimeout = null;
			let startY = 0;
			let currentY = 0;
			let isDragging = false;

			function showCartNotification() {
				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				// Reset any inline transform styles from dragging
				notification.style.transform = '';

				// Show notification
				notification.classList.remove('-translate-y-24', 'opacity-0', 'pointer-events-none');
				notification.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

				// Clear existing timeout
				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}

				// Hide after 5 seconds
				notificationTimeout = window.setTimeout(() => {
					hideCartNotification();
				}, 5000);
			}

			function hideCartNotification() {
				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				notification.style.transform = '';
				notification.classList.add('-translate-y-24', 'opacity-0', 'pointer-events-none');
				notification.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
			}

			function handleTouchStart(e) {
				const notification = document.getElementById('cart-notification');
				if (!notification || notification.classList.contains('opacity-0')) return;

				isDragging = true;
				startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
				currentY = startY;

				// Remove transition during drag for immediate feedback
				notification.classList.remove('transition-all', 'duration-300');

				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}
			}

			function handleTouchMove(e) {
				if (!isDragging) return;

				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
				const deltaY = currentY - startY;

				// Only allow dragging upwards or slightly downwards
				if (deltaY < 0) {
					e.preventDefault(); // Prevent scrolling
					notification.style.transform = \`translate(-50%, \${deltaY}px)\`;
				}
			}

			function handleTouchEnd() {
				if (!isDragging) return;
				isDragging = false;

				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				notification.classList.add('transition-all', 'duration-300');

				const deltaY = currentY - startY;

				// If dragged up enough, hide it
				if (deltaY < -20) {
					hideCartNotification();
				} else {
					// Otherwise bounce back and resume timeout
					notification.style.transform = '';
					notificationTimeout = window.setTimeout(() => {
						hideCartNotification();
					}, 5000);
				}
			}

			function initCartNotification() {

				updateCartBadge();

				const notification = document.getElementById('cart-notification');
				if (notification) {
					// Clean up previous event listeners if needed
					notification.replaceWith(notification.cloneNode(true));
					const newNotification = document.getElementById('cart-notification');

					if (newNotification) {
						newNotification.addEventListener('touchstart', handleTouchStart , { passive: false });
						newNotification.addEventListener('touchmove', handleTouchMove , { passive: false });
						newNotification.addEventListener('touchend', handleTouchEnd);

						newNotification.addEventListener('mousedown', handleTouchStart );
						document.addEventListener('mousemove', handleTouchMove );
						document.addEventListener('mouseup', handleTouchEnd);
					}
				}
			}

			// Update on page load
			document.addEventListener("astro:page-load", initCartNotification);

			// Listen for custom event
			document.addEventListener('cart-updated', () => {
				updateCartBadge();
				showCartNotification();
			});

			// Cleanup event listeners before swap
			document.addEventListener("astro:before-swap", () => {
				document.removeEventListener('mousemove', handleTouchMove );
				document.removeEventListener('mouseup', handleTouchEnd);
				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}
			});
		<\/script> </body> </html>`], ['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"', '><title>WallsByYemisi</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">', "", `</head> <body class="bg-[#FCFBF8] text-[#333333] font-['Plus_Jakarta_Sans',_sans-serif]" data-astro-cid-sckkx6r4> <!-- Global Cart Notification Popup --> <div id="cart-notification" class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#2D2A26] text-[#F5F2EA] px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-3 transition-all duration-300 transform -translate-y-24 opacity-0 pointer-events-none touch-none select-none" style="touch-action: none;" data-astro-cid-sckkx6r4> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sckkx6r4> <path d="M20 6 9 17l-5-5" data-astro-cid-sckkx6r4></path> </svg>
Added to Cart
</div> `, ` <script lang="ts">
			function updateCartBadge() {
				const badges = document.querySelectorAll('.cart-badge');
				if (badges.length === 0) return;

				let cart = [];
				try {
					const savedCart = localStorage.getItem('cart');
					if (savedCart) {
						cart = JSON.parse(savedCart);
					}
				} catch (error) {
					console.error('Error parsing cart from localStorage', error);
				}

				let totalQuantity = 0;
				cart.forEach((item) => {
					totalQuantity += item.quantity || 1;
				});

				badges.forEach((badge) => {
					if (totalQuantity > 0) {
						badge.textContent = totalQuantity.toString();
						badge.classList.remove('hidden');
					} else {
						badge.classList.add('hidden');
					}
				});
			}

			let notificationTimeout = null;
			let startY = 0;
			let currentY = 0;
			let isDragging = false;

			function showCartNotification() {
				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				// Reset any inline transform styles from dragging
				notification.style.transform = '';

				// Show notification
				notification.classList.remove('-translate-y-24', 'opacity-0', 'pointer-events-none');
				notification.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

				// Clear existing timeout
				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}

				// Hide after 5 seconds
				notificationTimeout = window.setTimeout(() => {
					hideCartNotification();
				}, 5000);
			}

			function hideCartNotification() {
				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				notification.style.transform = '';
				notification.classList.add('-translate-y-24', 'opacity-0', 'pointer-events-none');
				notification.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
			}

			function handleTouchStart(e) {
				const notification = document.getElementById('cart-notification');
				if (!notification || notification.classList.contains('opacity-0')) return;

				isDragging = true;
				startY = 'touches' in e ? e.touches[0].clientY : e.clientY;
				currentY = startY;

				// Remove transition during drag for immediate feedback
				notification.classList.remove('transition-all', 'duration-300');

				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}
			}

			function handleTouchMove(e) {
				if (!isDragging) return;

				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
				const deltaY = currentY - startY;

				// Only allow dragging upwards or slightly downwards
				if (deltaY < 0) {
					e.preventDefault(); // Prevent scrolling
					notification.style.transform = \\\`translate(-50%, \\\${deltaY}px)\\\`;
				}
			}

			function handleTouchEnd() {
				if (!isDragging) return;
				isDragging = false;

				const notification = document.getElementById('cart-notification');
				if (!notification) return;

				notification.classList.add('transition-all', 'duration-300');

				const deltaY = currentY - startY;

				// If dragged up enough, hide it
				if (deltaY < -20) {
					hideCartNotification();
				} else {
					// Otherwise bounce back and resume timeout
					notification.style.transform = '';
					notificationTimeout = window.setTimeout(() => {
						hideCartNotification();
					}, 5000);
				}
			}

			function initCartNotification() {

				updateCartBadge();

				const notification = document.getElementById('cart-notification');
				if (notification) {
					// Clean up previous event listeners if needed
					notification.replaceWith(notification.cloneNode(true));
					const newNotification = document.getElementById('cart-notification');

					if (newNotification) {
						newNotification.addEventListener('touchstart', handleTouchStart , { passive: false });
						newNotification.addEventListener('touchmove', handleTouchMove , { passive: false });
						newNotification.addEventListener('touchend', handleTouchEnd);

						newNotification.addEventListener('mousedown', handleTouchStart );
						document.addEventListener('mousemove', handleTouchMove );
						document.addEventListener('mouseup', handleTouchEnd);
					}
				}
			}

			// Update on page load
			document.addEventListener("astro:page-load", initCartNotification);

			// Listen for custom event
			document.addEventListener('cart-updated', () => {
				updateCartBadge();
				showCartNotification();
			});

			// Cleanup event listeners before swap
			document.addEventListener("astro:before-swap", () => {
				document.removeEventListener('mousemove', handleTouchMove );
				document.removeEventListener('mouseup', handleTouchEnd);
				isDragging = false;
				if (notificationTimeout !== null) {
					window.clearTimeout(notificationTimeout);
				}
			});
		<\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/app/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
