<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { pics } from "$lib/carouselPics";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import Autoplay from "embla-carousel-autoplay";
  export let data;
  let spots = data.spots;

  onMount(() => {
    console.log(data);
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

<div class="flex flex-wrap _1 gap-7 justify-center">
  <!--contains boxes-->

  {#each spots as spot}
    <div
      class="flex flex-col items-center gap-2 border border-gray-400 hover:cursor-pointer rounded shadow w-80 p-2 font-sans"
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
          alt="bikeTrail"
          class="h-32 w-[180px] rounded-sm"
        />
        <div class="flex flex-col">
          <!--Discription and review rate-->
          <div class="flex text-sm">{spot.description}</div>
          <div class="flex">{spot.averageRating}</div>

          <a href="/spots/{spot.id}" class="flex text-center hover:text-red"
            >Show more</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>

<div class="embla m-7" use:emblaCarouselSvelte={{ options, plugins }}>
  <div class="embla__container">
    {#each pics as pic}
      <div
        class="embla__slide w-full h-[700px] overflow-y-hidden flex items-center"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={pic.pic} class="w-full" />
      </div>
    {/each}
  </div>

  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024 <a href="https://google.com/" class="hover:underline"
          >XXYXY™</a
        >. All Rights Reserved.
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
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
