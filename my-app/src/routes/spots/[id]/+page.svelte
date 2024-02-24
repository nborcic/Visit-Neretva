<script>
  export let data;
</script>

<div
  class="flex flex-col items-center gap-2 border border-gray-400 rounded shadow w-80 p-2 font-sans"
>
  <!--each box-->

  <div class="flex _title">
    <p class="flex">{data.name}</p>
  </div>
  <div class="flex _3_titleAndImage flex-row items-center gap-2">
    <img
      src="/Spots_images/{data.pic}"
      alt="bikeTrail"
      class="h-32 w-[180px]"
    />
    <div class="flex flex-col">
      <!--Discription and review rate-->
      <div class="flex text-sm">{data.description}</div>
      <div class="flex">{data.averageRating}</div>
      <a href="/spots/">Home</a>
    </div>
  </div>
</div>
