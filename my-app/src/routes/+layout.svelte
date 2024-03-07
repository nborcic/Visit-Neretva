<script lang="js">
  import "../app.css";
  import "$lib/sampleData.ts";
  import "../app.css";
  import { spots } from "$lib/sampleData";

  let inputValue = "";
  let searchResults = [];

  function handleButtonClick() {
    goto("/search?q=" + inputValue);
  }
  function handleButtonClickSea() {
    goto("/search?q=sea");
  }
  function handleButtonClickClimb() {
    goto("/search?q=climb");
  }
  function handleButtonClickHights() {
    goto("/search?q=high");
  }

  import { goto } from "$app/navigation";
</script>

<div class="flex flex-col items-center h-screen bg-white">
  <div class="max-w-[1280px] gap-4 flex flex-col">
    <header class="sticky top-0 bg-white w-full">
      <div
        class="w-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div class="flex justify-between items-center p-4 border bg-amber-200">
          <div class="flex gap-3 items-center">
            <img
              src="/Spots_images/spotslogo.jpeg"
              class="h-8 rounded-sm"
              alt="NeretvaLogo"
            />
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Explore Neretva</span
              >
            </a>
          </div>
          <div class="flex items-center gap-4">
            <input
              type="text"
              id="input"
              bind:value={inputValue}
              class="block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Explore Neretva"
              required
            />
            <button
              type="submit"
              id="btn"
              disabled={!inputValue}
              on:click={handleButtonClick}
              class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-200"
              >Search</button
            >
          </div>
          
        </div>
        <!-- Additional navigation and dropdowns -->
      </div>
      <div class="flex text-2xl gap-5 px-1">
        <div class="flex">
          <div class=""></div>
          <a
            href="https://www.google.com/maps/@43.025144,17.5368241,12.67z/data=!5m2!1e2!1e4?entry=ttu"
            target="_blank"
            ><img
              src="/Spots_images/mapIcon.jpg"
              alt="mapLogo"
              class="h-6 w-6"
            /></a
          >
        </div>
        <div class="text-2xl font-semibold"><a href="/spots/">Neretva</a></div>
        <div class="flex">
          <ul class="flex flex-row gap-2 font-semibold">
            <li><button on:click={handleButtonClick}>Bike</button></li>
            <li><button on:click={handleButtonClickSea}>Sea</button></li>
            <li><button on:click={handleButtonClickClimb}>Climb</button></li>
            <li><button on:click={handleButtonClickHights}>Heights</button></li>
          </ul>
        </div>
      </div>
    </header>
    <div class="flex flex-col justify-center items-center bg-gray-100">
      <main class="w-full p-4">
        <slot />
      </main>
    </div>
  </div>
</div>
