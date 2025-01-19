<script lang="ts">
  export let data;
  let inputValue = "";

  import { navigateToSpot } from "$lib/utils.ts";
  $: searchResults = data.spots;
</script>

<div class="w-[1280px] h-[60%]">
  {#if searchResults.length > 0}
    <div><h1 class="text-4xl font-bold text-[#E89E3D]">Search result</h1></div>
  {/if}
  {#if searchResults.length > 0}
    <div class="grid grid-cols-3 gap-4 w-full mx-auto">
      {#each searchResults as spot}
        <div
          class="flex flex-col items-start gap-2 border-gray-400 hover:cursor-pointer rounded-xl shadow-md w-full font-Manrope h-[310px] hover:shadow-lg transition ease-in-out hover:bg-[rgb(232,158,61)]"
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
  {:else}
    <div class="text-center w-[1280px] h-[60%]">
      <p class="font-semibold">
        No results found. Please provide some text to search.
      </p>
    </div>
  {/if}
  <slot />
</div>
