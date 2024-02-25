<script>
  import "../app.css";
</script>

<div class="flex flex-col items-center h-screen bg-white">
  <div class="max-w-[1280px] gap-4 flex flex-col">
    <header class="sticky top-0 bg-white w-full">
      <div
        class="w-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div class="flex justify-between items-center p-4">
          <div class="flex gap-3 items-center">
            <img
              src="/Spots_images/spotslogo.jpeg"
              class="h-8"
              alt="NeretvaLogo"
            />
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >TEXT1</span
              >
            </a>
          </div>
          <div class="flex items-center gap-4">
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Explore Neretva"
              required
            />
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Search</button
            >
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
          </button>
        </div>
        <!-- Additional navigation and dropdowns -->
      </div>
      <div class="flex text-2xl gap-3 px-2">
        <div>
          <a
            href="https://www.google.com/maps/@43.025144,17.5368241,12.67z/data=!5m2!1e2!1e4?entry=ttu"
            target="_blank"
            ><img
              src="/Spots_images/mapIcon.jpg"
              alt="mapLogo"
              class=" h-6 w-6"
            /></a
          >
        </div>
        <div class="text-2xl font-semibold">Visit Neretva </div>
        <div class="flex"><ul class="flex flex-row gap-2 font-semibold"><li>Bike</li><li>Eat</li><li>Hike</li><li>Skydiving</li></ul></div>
      </div>
     
    </header>
    <div class="flex flex-col justify-center items-center bg-gray-100">
      <main class="w-full p-4">
        <slot />
      </main>
    </div>
  </div>
</div>
