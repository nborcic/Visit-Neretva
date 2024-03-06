<script>
  export let data;
  let inputValue = "";

  let searchResults = data.spots;
</script>

<div class="">
  {#if searchResults.length > 0}
    <div class="search-result">
      {#each searchResults as spot}
        <div class="outer_box right_box">
          <div class="left_box flex">
            <div class="flex flex-row flex-shrink justify-start">
              <img
                src="/Spots_images/{spot.pic}"
                alt=""
                class="rounded-xl p-2"
              />
            </div>
            <div class="maps_integration justify-end rounded-xl">
              <iframe
                title="mapsIntergr"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d223113.24054143653!2d17.65090174887212!3d43.097384819142725!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sno!4v1709719383814!5m2!1sen!2sno"
                style="map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="right_box shadow-xl rounded-xl">
            <div class="upper_one right_box font-bold p-2">
              {spot.name} - {spot.phoneNumber}
            </div>
            <div class="down_one right_box font-medium p-2">
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

<style>
  * {
    width: 920px;
  }

  .maps_integration {
    widows: 40%;

    justify-self: end;
  }

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 7.5px;
  }
</style>
