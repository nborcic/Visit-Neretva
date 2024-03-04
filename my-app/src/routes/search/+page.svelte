<script>
  import { pics } from "./../../lib/carouselPics.ts";
  import { goto } from "$app/navigation";
  import { spots } from "$lib/sampleData";
  import database from "svelte-awesome/icons/database";
  export let data;
  let inputValue = "";

  let searchResults = data.spots;
</script>

{#if searchResults.length > 0}
  <div class="search-results">
    {#each searchResults as spot}
      <div class="outer_box right_box border border-black">
        <div class="left_box flex border border-black">
          <img
          src="/Spots_images/{spot.pic}"
          alt=""
          class=""
        />
        </div>
        <div class="right_box border border-black">
          <div class="upper_one right_box border border-black">{spot.name}</div>
          <div class="down_one right_box border border-black">
            {spot.description}
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p>No results found.</p>
{/if}
<slot />
