import { c as create_ssr_component, e as each, b as escape } from "../../../chunks/ssr.js";
import "clsx";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchResults;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  searchResults = data.spots;
  return `<div class="w-[1280px] h-[60%]">${searchResults.length > 0 ? `<div data-svelte-h="svelte-6idkl"><h1 class="text-4xl font-bold text-[#E89E3D]">Search result</h1></div>` : ``} ${searchResults.length > 0 ? `<div class="grid grid-cols-3 gap-4 w-full mx-auto">${each(searchResults, (spot) => {
    return `<div class="flex flex-col items-start gap-2 border-gray-400 hover:cursor-pointer rounded-xl shadow-md w-full font-Manrope h-[310px] hover:shadow-lg transition ease-in-out hover:bg-[rgb(232,158,61)]" role="presentation"><div class="w-full h-[200px]"><img src="${"/Spots_images/" + escape(spot.pic, true)}" alt="${"Image for " + escape(spot.name, true)}" class="w-full h-full object-cover rounded-t-xl"></div> <div class="text-left font-medium text-2xl leading-[24px] mt-2 pl-4">${escape(spot.name)}</div> <div class="text-left text-[16px] font-normal leading-[24px] pl-4">${escape(spot.description)}</div> </div>`;
  })}</div>` : `<div class="text-center w-[1280px] h-[60%]" data-svelte-h="svelte-1cpdn6s"><p class="font-semibold">No results found. Please provide some text to search.</p></div>`} ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Page as default
};
