import { c as create_ssr_component } from "../../../../chunks/ssr.js";
/* empty css                     */
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="w-full">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
