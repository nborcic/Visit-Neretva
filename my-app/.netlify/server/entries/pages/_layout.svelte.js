import { c as create_ssr_component, e as each, a as add_attribute, b as escape } from "../../chunks/ssr.js";
/* empty css               */
import "../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  const links = [
    { name: "Bike", q: "biki" },
    { name: "Sea", q: "sea" },
    { name: "Climb", q: "climb" },
    { name: "Heights", q: "high" }
  ];
  return `<div class="flex flex-col items-center h-screen font-Manrope font-normal"><div class="max-w-[1280px] gap-4 flex flex-col bg-white"><header class="sticky top-0 w-full"><div class="w-full bg-white"><div class="flex justify-between items-center px-8 py-2 border-b border-b-gray-300"><a href="/spots" data-svelte-h="svelte-10iqnc7"><div class="p-3 rounded-2xl cursor-pointer font-bold"><h1 class="text-2xl">Visit Neretva</h1></div></a> <div class="flex gap-8 font-semibold">${each(links, (link) => {
    return `<button class="text-black rounded-2xl bg-white hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-500 font-medium text-sm px-2 py-2 -600">${escape(link.name)} </button>`;
  })}</div>  <div class="flex items-center gap-4"><input type="text" id="input" class="block p-2 pl-10 rounded-xl w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explore Neretva" required${add_attribute("value", inputValue, 0)}> <button type="submit" id="btn" ${"disabled"} class="text-black rounded-2xl bg-white hover:bg-[rgb(232,158,61)] hover:text-white focus:ring-4 focus:outline-none focus:ring-green-500 font-medium text-sm px-2 py-2">Search</button></div></div> </div></header> <div class="flex flex-col justify-center items-center bg-white"><main class="w-full">${slots.default ? slots.default({}) : ``}</main></div></div></div>`;
});
export {
  Layout as default
};
