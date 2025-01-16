<script>
  export let data;
  let inputValue = "";

  let searchResults = data.spots;
</script>

<div class="w-[1280px] h-[60%]">
  {#if searchResults.length > 0}
    <div class="search-result">
      {#each searchResults as spot}
        <div>
          <div class="w-[1280px] flex flex-row gap-4 p-2">
            <div class="flex flex-row justify-start">
              <img src="/Spots_images/{spot.pic}" alt="" class="rounded-xl" />
            </div>
            <div class="w-[100%] flex flex-row rounded-xl">
              <iframe
                class="w-[100%] rounded-lg flex flex-row"
                title="mapsIntergr"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d223113.24054143653!2d17.65090174887212!3d43.097384819142725!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sno!4v1709719383814!5m2!1sen!2sno"
                style="map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="shadow-xl rounded-xl">
            <div class="font-bold p-2">
              {spot.name} - {spot.phoneNumber}
            </div>
            <div class="font-medium p-2">
              {spot.description} - {spot.website}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="font-semibold">
      No results found. Please provide some text to search.
    </p>
  {/if}
  <slot />
</div>
