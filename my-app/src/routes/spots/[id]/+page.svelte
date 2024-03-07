<script lang="ts">
  export let data;
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
    <div class="flex items-center gap-2 font-bold text-blue-gray-500">
      <div class="inline-flex items-center"></div>
      <p
        class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500"
      ></p>
      <div>
        <!-- Directly map averageRating to visual stars without using stars array, as it seems unnecessary -->
        {#if data.averageRating}
          <span class=" flex star text-xl">
            {#each { length: 5 } as star, index}
              {#if index < data.averageRating}
                <div class="text-yellow-400 text-4xl">★</div>
              {:else}
                <div class="text-grey-950 text-4xl">☆</div>
              {/if}
            {/each}
          </span>
          <div>{data.averageRating} Based on {data.numRating} Reviews</div>
        {:else}
          <p>No rating available.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
