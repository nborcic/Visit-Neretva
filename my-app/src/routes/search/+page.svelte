<script>
  import { searchResultsStore } from "$lib/stores";
  import { goto } from "$app/navigation";
  import { spots } from "$lib/sampleData";
  import database from "svelte-awesome/icons/database";
  export let data;
  let inputValue = "";

  function handleButtonClick() {
    searchResultsStore.set(results);
  }
  /**
   * @type {string | any[]}
   */
  let searchResults = [];
  searchResultsStore.subscribe((value) => {
    searchResults = value;
  });
</script>

{#if searchResults.length > 0}
  <div class="search-results">
    {#each searchResults as spot}
      <div class="outer_box right_box border border-black">
        <div class="left_box flex border border-black"></div>
        <div class="right_box border border-black">
          <div class="upper_one right_box border border-black">{spot.name}</div>
          <div class="down_one right_box border border-black"></div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p>No results found.</p>
{/if}
<slot />
