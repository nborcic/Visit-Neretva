<script lang="ts">
  import { writable, get } from "svelte/store";
  import Swal from "sweetalert2";
  import type { PageData } from "./$types";
  import Test from "$lib/components/Test.svelte";

  export let data: PageData;

  async function selectRating(spotsId: number, newRating: number) {
    ratingForm.submit();
    rateItem(spotsId, newRating);
    // rateItem(data.id, newRating);

    Swal.fire({
      icon: "success",
      title: `Thanks for ${newRating} stars!`,
      showConfirmButton: false,
      timer: 1500,
    });

    const newNumRating = Number(data.numRating) + 1;

    const totalRatingSum = data.averageRating * data.numRating + newRating;
    const newAverageRating = Math.round(totalRatingSum / newNumRating);

    // Update your data object and selectedRating if necessary
    data.numRating = newNumRating;
    data.averageRating = newAverageRating;
  }

  let selectedRating = writable(0);

  // Function to update rating for a spot
  function rateItem(spotsId, newRating) {
    console.log("Spot ID:", spotsId, "New Rating:", newRating);

    // spots.update((allItems) => {
    //   return allItems.map((spots) => {
    //     if (spots.id === spotsId) {
    //       // Calculate the new average rating
    //       const totalRating = spots.rating * spots.numRatings + newRating;
    //       const newNumRatings = spots.numRatings + 1;
    //       const newAverageRating = totalRating / newNumRatings;

    //       return {
    //         ...spots,
    //         rating: newAverageRating,
    //         numRatings: newNumRatings,
    //       };
    //     }
    //     return spots;
    //   });
    // });
  }

  let ratingForm;
</script>

<div
  class="flex flex-col items-center rounded-md gap-2 shadow-md p-2 font-sans bg-blend-hard-light"
>
  <!--each box-->

  <div class="flex _title">
    <p class="flex font-extrabold text-2xl">
      {data.name}
    </p>
  </div>
  <div
    class="flex _3_titleAndImage flex-row items-center rounded-md gap-3 transition"
  >
    <img
      src="/Spots_images/{data.pic}"
      alt="bikeTrail"
      class="h-52 flex transition ease-in-out hover:scale-110 hover:scaleX-110 hover:shadow-lg rounded-md"
    />
    <div class="flex flex-col">
      <!--Discription and review rate-->
      <div class="flex text-sm font-serif font-bolder gap-5">
        {data.longDescription}
      </div>
      <div class="flex font-serif font-bolder gap-2">
        Average Spot Rating: {data.averageRating}
      </div>
      <a href="/spots/" class="font-serif text-[rgb(232,158,61)]"> Home</a>
    </div>
  </div>
</div>

<!-- 3 columns containing item details under picture-->
<div class="flex h-64 w-full gap-5 shadow-md rounded-md shrink justify-between">
  <div
    class="devides_first flex flex-col w-full p-3 border border-r-0 border-l-0 rounded-md justify-between"
  >
    <div class="font-semibold flex flex-col border-b-2 p-2 gap-2">
      <h3>
        <div>
          Ratings and reviews {data.averageRating}
        </div>

        <div>
          {data.website}
        </div>
      </h3>
    </div>
    <div class="flex p-2 gap-2">
      {data.price}-{data.type}
    </div>
    <div class="items-center p-2 gap-2 border-t-2">
      <div>{data.phoneNumber}</div>
      {data.address}
    </div>
  </div>
  <div
    class="devides_second flex flex-col w-full p-3 border border-r-0 border-l-0 rounded-sm justify-between"
  >
    <div class="font-semibold flex flex-col border-b-2 p-2 gap-2">
      <h3>
        <div>
          Ratings and reviews {data.averageRating}
        </div>

        <div>
          {data.website}
        </div>
      </h3>
    </div>
    <div class="flex p-2 gap-2">
      {data.price}-{data.type}
    </div>
    <div class="items-center p-2 gap-2 border-t-2">
      <div>{data.phoneNumber}</div>
      {data.address}
    </div>
  </div>
  <div
    class="devides_third flex flex-col w-full p-3 border border-r-0 border-l-0 rounded-sm justify-between"
  >
    <div class="font-semibold flex flex-col border-b-2 p-2 gap-2">
      <h3>
        <div>
          Ratings and reviews {data.averageRating}
        </div>

        <div>
          {data.website}
        </div>
      </h3>
    </div>
    <div class="flex p-2 gap-2">
      {data.price}-{data.type}
    </div>
    <div class="items-center p-2 gap-2 border-t-2">
      <div>{data.phoneNumber}</div>
      {data.address}
    </div>
  </div>
</div>

<div class="reviewAndRating">
  <div
    class="grid min-h-[140px] w-full place-items-center rounded-lg p-6 lg:overflow-visible"
  >
    <div class="flex items-center gap-6 font-bold text-blue-gray-500">
      <div class="inline-flex items-center gap-1">
        <div class="bodyOne flex">
          <form bind:this={ratingForm} method="post" action="?/myform">
            <div class="rating">
              {#each Array(5) as _, i (5 - i)}
                <input
                  type="radio"
                  id={`star${5 - i}`}
                  bind:group={$selectedRating}
                  value={5 - i}
                  name="star"
                  on:change={() => selectRating(data.id, 5 - i)}
                />
                <label for={`star${5 - i}`}>★</label>
              {/each}
            </div>
          </form>
        </div>
        <span
          class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500"
        >
          |
        </span>

        <div>
          {#if data.averageRating}
            <div class="flex">
              <div>
                {data.averageRating} Stars quality rating from {data.numRating} Reviews
              </div>
            </div>
            <span class="flex star text-xl cursor-none">
              {#each { length: 5 } as star, index}
                {#if index < data.averageRating}
                  <div class="text-yellow-400 text-4xl">★</div>
                {:else}
                  <div class="text-grey-950 text-4xl">☆</div>
                {/if}
              {/each}
            </span>
          {:else}
            <p>No rating available.</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .rating {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: row-reverse;
  }
  .rating input {
    display: none;
  }
  .rating label {
    font-size: 30px;
    color: grey;
  }
  .rating label:hover,
  .rating label:hover ~ label {
    color: orange;
  }
  .rating input:checked ~ label {
    color: orange;
  }
</style>
