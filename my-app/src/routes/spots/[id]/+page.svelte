<script lang="ts">
  import { writable } from "svelte/store";
  import Swal from "sweetalert2";
  import type { PageData } from "./$types";

  export let data: PageData;

  // State to track the selected rating
  let selectedRating = writable(0);

  // Function to handle the rating selection
  async function selectRating(spotsId: number, newRating: number) {
    event.preventDefault();
    ratingForm.submit();

    rateItem(spotsId, newRating);
    Swal.fire({
      icon: "success",
      title: `Thanks for ${newRating} stars!`,
      showConfirmButton: false,
      timer: 1500,
    });

    const newNumRating = Number(data.numRating) + 1;
    const totalRatingSum = data.averageRating * data.numRating + newRating;
    const newAverageRating = Math.round(totalRatingSum / newNumRating);

    // Update the data object with new rating info
    data.numRating = newNumRating;
    data.averageRating = newAverageRating;
  }

  // Function to update rating for a spot
  function rateItem(spotsId: number, newRating: number) {
    console.log("Spot ID:", spotsId, "New Rating:", newRating);
  }

  let ratingForm: HTMLFormElement;
  const selectedRatingNumber = writable({});
</script>

<div
  class="flex flex-col items-center rounded-2xl gap-2 shadow-md p-2 font-Monrope max-w-[1280px]"
>
  <div class="flex _title">
    <p class="flex font-extrabold py-10 text-4xl">{data.name}</p>
  </div>
  <div
    class="flex _3_titleAndImage flex-row items-center rounded-md transition p-4"
  >
    <img
      src="/Spots_images/{data.pic}"
      alt="spot image for {data.name}"
      class=" h-[500px] w-[800px] flex transition rounded-xl ease-in-out hover:scale-105"
    />
    <div class="flex flex-col p-4">
      <div class="flex text-2xl font-Manrope font-bolder">
        {data.longDescription}
      </div>
      <div class="flex font-bolder font-Manrope text-xl">
        Average Spot Rating: <span class="text-green-500"
          >&nbsp;{data.averageRating}</span
        >
        <span class="text-[#E89E3D]">&nbsp;Stars</span>
      </div>
      <a
        href="/spots/"
        class="font-Manrope text-[rgb(232,158,61)] w-fit p-2 pl-0 text-xl hover:underline"
        >Home</a
      >
    </div>
  </div>
</div>

<div
  class="flex h-64 w-full gap-5 shadow-md rounded-2xl shrink justify-between"
>
  {#each [data, data, data] as spot}
    <div class="flex flex-col w-full p-3 rounded-md justify-between">
      <div class="font-normal flex flex-col p-2 gap-2">
        <div>
          <h3 class="underline">Reviews and Website:</h3>
          <p>Ratings and reviews {spot.averageRating}</p>
          <p>{spot.website}</p>
        </div>
      </div>
      <div class="flex p-2">
        Daily price:<br />
        {spot.price} - {spot.type}
      </div>
      <div class="items-center p-2 gap-2">
        <h3 class="underline">Contact Info:</h3>
        <div>{spot.phoneNumber}</div>
        {spot.address}
      </div>
    </div>
  {/each}
</div>

<!-- Review and Rating Section -->
<div class="reviewAndRating">
  <div
    class="flex min-h-[140px] w-full items-center py-10 justify-center rounded-lg lg:overflow-visible"
  >
    <div class="flex flex-col items-center gap-6 font-bold text-blue-gray-500">
      <h1 class="text-2xl pb-2">
        You have already visited this place. Why not rate it now?
      </h1>

      <div class="inline-flex items-center">
        <form bind:this={ratingForm} method="post" action="?/myform">
          <div class="rating flex justify-center flex-row-reverse gap-5 group">
            {#each Array(5) as _, i (5 - i)}
              <input
                class="hidden peer"
                type="radio"
                id={`star${5 - i}`}
                bind:group={$selectedRating}
                value={5 - i}
                name="star"
                on:change={() =>
                  data.id !== undefined && selectRating(data.id, 5 - i)}
              />
              <label
                class="text-gray-500 text-3xl cursor-pointer peer-checked:text-orange-400 peer-hover:text-orange-400 group-hover:peer-checked:text-orange-400"
                for={`star${5 - i}`}
              >
                ★
              </label>
            {/each}
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
