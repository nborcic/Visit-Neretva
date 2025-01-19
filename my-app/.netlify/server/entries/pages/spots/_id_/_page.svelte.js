import { c as create_ssr_component, d as subscribe, b as escape, e as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import "sweetalert2";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedRating, $$unsubscribe_selectedRating;
  let { data } = $$props;
  let selectedRating = writable(0);
  $$unsubscribe_selectedRating = subscribe(selectedRating, (value) => $selectedRating = value);
  let ratingForm;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_selectedRating();
  return `<div class="flex flex-col items-center rounded-2xl gap-2 shadow-md p-2 font-Monrope max-w-[1280px]"><div class="flex _title"><p class="flex font-extrabold py-10 text-4xl">${escape(data.name)}</p></div> <div class="flex _3_titleAndImage flex-row items-center rounded-md transition p-4"><img src="${"/Spots_images/" + escape(data.pic, true)}" alt="${"spot image for " + escape(data.name, true)}" class="h-[500px] w-[800px] flex transition rounded-xl ease-in-out hover:scale-105"> <div class="flex flex-col p-4"><div class="flex text-2xl font-Manrope font-bolder">${escape(data.longDescription)}</div> <div class="flex font-bolder font-Manrope text-xl">Average Spot Rating: <span class="text-green-500"> ${escape(data.averageRating)}</span> <span class="text-[#E89E3D]" data-svelte-h="svelte-11jzouf"> Stars</span></div> <a href="/spots/" class="font-Manrope text-[rgb(232,158,61)] w-fit p-2 pl-0 text-xl hover:underline" data-svelte-h="svelte-1nqhim8">Home</a></div></div></div> <div class="flex h-64 w-full gap-5 shadow-md rounded-2xl shrink justify-between">${each([data, data, data], (spot) => {
    return `<div class="flex flex-col w-full p-3 rounded-md justify-between"><div class="font-normal flex flex-col p-2 gap-2"><div><h3 class="underline" data-svelte-h="svelte-hu08wy">Reviews and Website:</h3> <p>Ratings and reviews ${escape(spot.averageRating)}</p> <p>${escape(spot.website)}</p> </div></div> <div class="flex p-2">Daily price:<br> ${escape(spot.price)} - ${escape(spot.type)}</div> <div class="items-center p-2 gap-2"><h3 class="underline" data-svelte-h="svelte-12qe6hr">Contact Info:</h3> <div>${escape(spot.phoneNumber)}</div> ${escape(spot.address)}</div> </div>`;
  })}</div>  <div class="reviewAndRating"><div class="flex min-h-[140px] w-full items-center py-10 justify-center rounded-lg lg:overflow-visible"><div class="flex flex-col items-center gap-6 font-bold text-blue-gray-500"><h1 class="text-2xl pb-2" data-svelte-h="svelte-1gvkcob">You have already visited this place. Why not rate it now?</h1> <div class="inline-flex items-center"><form method="post" action="?/myform"${add_attribute("this", ratingForm, 0)}><div class="rating flex justify-center flex-row-reverse gap-5 group">${each(Array(5), (_, i) => {
    return `<input class="hidden peer" type="radio"${add_attribute("id", `star${5 - i}`, 0)}${add_attribute("value", 5 - i, 0)} name="star"${5 - i === $selectedRating ? add_attribute("checked", true, 1) : ""}> <label class="text-gray-500 text-3xl cursor-pointer peer-checked:text-orange-400 peer-hover:text-orange-400 group-hover:peer-checked:text-orange-400"${add_attribute("for", `star${5 - i}`, 0)}>★
              </label>`;
  })}</div></form></div></div></div></div>`;
});
export {
  Page as default
};
