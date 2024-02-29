<script>

  export let data;
</script>

<div
  class="flex flex-col items-center gap-2 border border-gray-400 rounded shadow p-2 font-sans"
>
  <!--each box-->

  <div class="flex _title">
    <p class="flex font-extrabold text-xl">{data.name}</p>
  </div>
  <div
    class="flex _3_titleAndImage flex-row items-center gap-3 border  transition"
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
<div class="flex h-64 w-full gap-5 shadow-md border shrink  justify-between">
  <div
    class="devides_first flex flex-col w-full p-3 border rounded-sm justify-between"
  >
    <div class="font-semibold">
      <h3>
        Ratings and reviews
        {data.averageRating}
        {data.website}
      </h3>
    </div>
    {data.price}-{data.type}
    <div class="items-center">{data.phoneNumber}
    {data.address}
    

    </div>
  </div>
  <div
    class="devides_second flex flex-col  w-full p-3 border rounded-sm justify-between"
  >
    <div class="font-semibold">
      <h3>
        Ratings and reviews
        {data.averageRating}
        {data.website}
      </h3>
    </div>
    <div>

  {data.price}-{data.type}
  <div class="items-center">{data.phoneNumber}</div>
  {data.address}

      
    </div>
  </div>
  <div
    class="devides_third flex flex-col w-full p-3 border rounded-sm justify-between"
  >
  <div class="font-semibold">
    <h3>
      Ratings and reviews
      {data.averageRating}
      {data.website}
    </h3>
  </div>
  <div>

{data.price}-{data.type}
<div class="items-center">{data.phoneNumber}</div>
{data.address}

    
  </div>
</div>
</div>

<div class="reviewAndRating">
  <div
    class="grid min-h-[140px] w-full place-items-center rounded-lg p-6 lg:overflow-visible"
  >
    <div class="flex items-center gap-2 font-bold text-blue-gray-500">
      4.7
      <div class="inline-flex items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-700 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-700 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-700 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-700 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 cursor-pointer text-blue-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            >
            </path>
          </svg>
        </span>
      </div>
      <p
        class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500"
      >
        Based on 134 Reviews
      </p>
    </div>
  </div>
</div>
