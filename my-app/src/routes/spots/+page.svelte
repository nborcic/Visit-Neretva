<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { pics } from "$lib/carouselPics";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  import MapOfSpots from "$lib/components/MapOfSpots.svelte";

  export let data;
  let spots = data.spots;

  onMount(() => {
    // console.log(data);
  });

  /**
   * @param {number} spotsid
   */
  function navigateToSpot(spotsid) {
    goto(`/spots/${spotsid}`);
  }
  let options = { loop: true };
  let plugins = [Autoplay(300)];
</script>

<div class="h-24 w-full"></div>
<hero1 class="flex flex-row h-[45vh]">
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
      <p class="text-lg">
        Material 3 is the latest version of Google’s open-source design system.
        Design and build beautiful, usable products with Material 3.
      </p>
    </div>
    <div>
      <a href="/get-started" target="_self">
        <button class="mio-button">
          <div class="state-overlay">What's next</div>
          <span class="label">Explore Places</span>
          <div class="ripple"></div>
        </button>
      </a>
    </div>
  </div>

  <!-- Right side video with pause button -->
  <div class="flex h-full justify-center items-center w-[50%] relative">
    <mio-video>
      <div class="video-container relative">
        <video
          preload="auto"
          autoplay
          loop
          playsinline="true"
          class="rounded-2xl w-full h-full object-cover pr-2"
        >
          <source
            src="https://kstatic.googleusercontent.com/files/65da8f0326427a8e71bfa678348f3fa1a4bb1660e0b013591eb3bfd9df455bd5a3334249de61229029be7d2fd7cf18d4e143728b7e0702b6bde6251a9c64511a"
          />
        </video>
        <button
          id="btnToggleVideo"
          class="absolute bottom-4 right-4 rounded-full bg-white p-2 z-50 text-black"
          aria-label="Pause Video"
        >
          <span class="google-symbols">pause</span>
        </button>
      </div>
    </mio-video>
  </div>
</hero1>
<div class="h-24 w-full"></div>
<div class="flex flex-wrap _1 gap-7 justify-center font-sans p-2">
  <!--contains boxes-->

  {#each spots as spot}
    <div
      class="flex flex-col items-center gap-2 border-gray-400 hover:cursor-pointer rounded shadow-md w-80 p-2 font-sans hover:scale-110 hover:scaleX-110 hover:shadow-lg transition ease-in-out"
      role="presentation"
      on:click={() => navigateToSpot(spot.id)}
    >
      <!--each box-->

      <div class="flex _title">
        <p class="flex">{spot.name}</p>
      </div>
      <div class="flex _3_titleAndImage flex-row items-center gap-2">
        <img
          src="/Spots_images/{spot.pic}"
          alt=""
          class="h-32 w-[180px] rounded-sm"
        />
        <div class="flex flex-col">
          <!--Discription and review rate-->
          <div class="flex text-sm">{spot.description}</div>
          <div class="flex text-sm">Rating: {spot.averageRating}</div>

          <a
            href="/spots/{spot.id}"
            class="flex text-center hover:text-white text-sm h-4 hover:bg-grey-700"
            >Show more</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>

<div>
  <div
    class="embla mt-4 rounded-md shadow-md"
    use:emblaCarouselSvelte={{ options, plugins }}
  >
    <div class="embla__container">
      {#each pics as pic}
        <div
          class="embla__slide w-full h-[50vh] overflow-hidden flex items-center"
        >
          <img src={pic.pic} class="w-full" alt="carousel pictures" />
        </div>
      {/each}
    </div>
    <h1 class="text-center font-bold font-Manrope relative text-white">
      This is us
    </h1>
  </div>
  <footer
    class="bg-gray-100 mt-2 rounded-md shadow-md w-[100%] dark:bg-gray-800"
  >
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
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
