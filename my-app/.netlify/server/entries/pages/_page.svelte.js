import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1vi3xn4_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Visit Neretva"><!-- HEAD_svelte-1vi3xn4_END -->`, ""}`;
});
export {
  Page as default
};
