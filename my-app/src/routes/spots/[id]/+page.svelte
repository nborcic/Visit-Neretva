<script lang="ts">
  import { spots } from "$lib/sampleData";
  import { writable } from "svelte/store";
  import Swal from "sweetalert2";

  export let data;

  async function selectRating(newRating: number) {
    
    Swal.fire({
      icon: "success",
      title: `Thanks for ${newRating} stars!`,
      showConfirmButton: false,
      timer: 1500,
    });

    
    const newNumRating = data.numRating + 1;

    
    const totalRatingSum = data.averageRating * data.numRating + newRating;
    const newAverageRating = totalRatingSum / newNumRating;

    // Update your data object and selectedRating if necessary
    data.numRating = newNumRating;
    data.averageRating = newAverageRating;

    // Assuming $selectedRating is a writable store you're using to track the selected rating
    // Update it or perform necessary actions here, depending on your application's needs
  }

  let selectedRating = writable(0);
</script>

<div
  class="flex flex-col items-center gap-2 border border-gray-400 rounded shadow p-2 font-sans"
>
  <!--each box-->

  <div class="flex _title">
    <p class="flex font-extrabold text-2xl">{data.name}</p>
  </div>
  <div
    class="flex _3_titleAndImage flex-row items-center gap-3 border transition bg-blue-100"
  >
    <img
      src="/Spots_images/{data.pic}"
      alt="bikeTrail"
      class="h-52 flex transition ease-in-out hover:scale-105"
    />
    <div class="flex flex-col">
      <!--Discription and review rate-->
      <div class="flex text-sm font-serif font-bolder gap-5">
        {data.longDescription}
      </div>
      <div class="flex font-serif font-bolder gap-2">
        Average Spot Rating: {data.averageRating}
      </div>
      <a href="/spots/" class="font-serif font-bolder"> Home</a>
    </div>
  </div>
</div>
<!-- 3 columns containing item deatails under picture-->
<div class="flex h-64 w-full gap-5 shadow-md border shrink justify-between">
  <div
    class="devides_first flex flex-col w-full p-3 border rounded-sm justify-between"
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
    class="devides_second flex flex-col w-full p-3 border rounded-sm justify-between"
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
    class="devides_third flex flex-col w-full p-3 border rounded-sm justify-between"
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
          <div class="rating">
            {#each Array(5) as _, i (5 - i)}
              <input
                type="radio"
                id={`star${5 - i}`}
                bind:group={$selectedRating}
                value={5 - i}
                on:change={() => selectRating(5 - i)}
              />
              <label for={`star${5 - i}`}>★</label>
            {/each}
          </div>
        </div>
        <p
          class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500"
        >
          |
        </p>
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
  .star {
    cursor: pointer;
  }
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
  } /* Hover effect */
  .rating input:checked ~ label {
    color: orange;
  } /* Filled effect */
</style>
