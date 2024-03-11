<script lang="ts">
  export let data;
  export function starOne() {
    console.log(starOne);
  }
  export function starTwo() {
    console.log(starTwo);
  }
  export function starThree() {
    console.log(starThree);
  }
  export function starFour() {
    console.log(starFour);
  }
  export function starFive() {
    console.log(starFive);
  }
  export function submitStar() {
    console.log("submitStar");
  }
  function alertClick() {
    const click = document.getElementById("#alertClick");
    ////////////////make and alert for comfirmation
  }

  const testAlert = () => alert("alert."); 
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
      <div class="inline-flex items-center flex-col gap-1">
        <h3 class="flex">Rate this place!</h3>
        <div class="bodyOne flex">
          <div class="rating text-amber-500">
            <span id="star5" on:click={starFive}>☆</span><span
              on:click={starFour}
              id="star4">☆</span
            ><span on:click={starThree} id="star3">☆</span><span
              on:click={starTwo}
              id="star2">☆</span
            ><span on:click={starOne} id="star1">☆</span>
          </div>
          <div class="flex flex-col">
            <button
              id="submitStar"
              on:click={testAlert}
              type="submit"
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
              >Rate</button
            >
          </div>
        </div>
      </div>
      <p
        class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500"
      ></p>
      <div>
        {#if data.averageRating}
          <div class="flex">
            <div>
              {data.averageRating} Stars based on {data.numRating} Reviews
            </div>
          </div>
          <span class="flex star text-xl">
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

<div class="px-8 py-6 bg-green-400 text-white flex justify-between rounded">
  <div class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-7 w-7 mr-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
      />
    </svg>
    <p>Success! This is a success alert—check it out!</p>
  </div>
  <button class="text-green-100 hover:text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>

<style>
  .bodyOne {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    font-size: 36px;
  }

  .rating > span {
    width: 1.1em;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .rating > span:hover:before,
  .rating > span:hover ~ span:before {
    content: "\2605";
    position: absolute;
    font-size: 36px;
  }
</style>
