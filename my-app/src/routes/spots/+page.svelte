<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Layout from "../+layout.svelte";

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
          class="h-32 w-[180px]"
        />
        <div class="flex flex-col">
          <!--Discription and review rate-->
          <div class="flex text-sm">{spot.description}</div>
          <div class="flex">{spot.averageRating}</div>
          <a href="/spots/{spot.id}">Show more</a>
        </div>
      </div>
    </div>
  {/each}
</div>
