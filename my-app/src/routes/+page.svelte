<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { pics } from "$lib/carouselPics";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import { navigateToSpot } from "$lib/utils.js";

  export let data;
  let spots = data.spots;
 
  onMount(() => {
    // console.log(data);
  });

  let options = { loop: true };
  let plugins = [Autoplay(300)];
</script>

<div class="h-24 w-full" id="top"></div>
<hero1 class="flex flex-row h-[45vh] font-Manrope bg-white">
  <!-- Left side text content -->
  <div class="primary w-[50%] flex flex-col justify-center p-8 text-black">
    <div class="title mb-6">
      <h1 tabindex="-1" class="text-4xl font-bold text-[#E89E3D]">
        See
        <span class="text-green-500"> More </span>
        Do <span class="text-green-500"> More </span>
        <br /> Neretva
        <span class="text-green-500"> Valley </span>
      </h1>
    </div>
    <div class="description mb-6">
      <p class="text-lg font-normal">
        From thrilling skydiving adventures to breathtaking sightseeing and
        world-class diving, Neretva offers unforgettable experiences for all.
      </p>
    </div>
    <div>
      <button>
        <a href="#valley"><span class="label">Explore Valley</span></a>
      </button>
    </div>
  </div>

  <!-- Right side video -->
  <div class="flex h-full justify-center items-center w-[50%] relative">
    <div class="relative w-[600px] h-[380px] overflow-hidden rounded-2xl">
      <iframe
        class="rounded-2xl h-full w-full shadow-2xl"
        src="https://www.youtube.com/embed/He_szuxhoNY?autoplay=1&Version=3&showinfo=0&loop=1&rel=1&controls=0&mute=1&playlist=He_szuxhoNY"
        title="Prodovi Intro"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</hero1>
<div
  class="bg-white pb-32 w-full h-10 gap-8 rounded-xl flex justify-center items-center"
>
  <img src="/poweredBy/aramco.svg" alt="aramco logo" />
  <img src="/poweredBy/bbraun.svg" alt="bbraun logo" />
  <img src="/poweredBy/energy-commission.svg" alt="energy-commission logo" />
  <img src="/poweredBy/equinor.svg" alt="equinor logo" />
  <img src="/poweredBy/omv.svg" alt="omv logo" />
</div>

<div class="h-22 w-full"></div>
<div
  class="text-2xl py-10 font-bold flex justify-center items-center"
  id="valley"
>
  Explore Neretva Valley
</div>
<div class="grid grid-cols-3 gap-4 w-full mx-auto">
  {#each spots as spot}
    <div
      class="flex flex-col items-start gap-2 border-gray-400 hover:cursor-pointer rounded-xl shadow-md w-full font-Manrope h-[310px] hover:shadow-lg transition ease-in-out hover:bg-green-500"
      role="presentation"
      on:click={() => navigateToSpot(spot.id)}
    >
      <div class="w-full h-[200px]">
        <img
          src="/Spots_images/{spot.pic}"
          alt="Image for {spot.name}"
          class="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div class="text-left font-medium text-2xl leading-[24px] mt-2 pl-4">
        {spot.name}
      </div>

      <div class="text-left text-[16px] font-normal leading-[24px] pl-4">
        {spot.description}
      </div>
    </div>
  {/each}
</div>
<div class="text-2xl mt-20 font-bold flex justify-center items-center">
  <span class="text-green-500"> Adventure Awaits</span>:
  <span class="text-[#E89E3D]"> Discover Neretva's Hidden Gems</span>
</div>
<div class="flex flex-col">
  <div
    class="overflow-hidden rounded-xl my-10"
    use:emblaCarouselSvelte={{ options, plugins }}
  >
    <div class="flex">
      {#each pics as pic}
        <div
          class=" flex-none min-w-0 w-full h-[50vh] overflow-hidden flex items-center"
        >
          <img src={pic.pic} class="w-full" alt="carousel pictures" />
        </div>
      {/each}
    </div>
  </div>
  <footer class="bg-white rounded-md shadow-md w-[100%]">
    <div
      class="rounded-md shadow-md max-w-screen-xl p-4 pr-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="https://google.com/" class="hover:underline"
          >XXYXY™</a
        >. All Rights Reserved.
      </span>
      <ul
        class="flex pr-2 items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li>
          <a href="#top" class="hover:underline me-4 md:me-6">About</a>
        </li>

        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#top" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</div>
