<script lang="ts">
  import "../app.css";
  import "$lib/sampleData.ts";
  import { goto } from "$app/navigation";

  let inputValue = "";
  const currentPage = "bike";

  const links = [
    { name: "Bike", q: "biki" },
    { name: "Sea", q: "sea" },
    { name: "Climb", q: "climb" },
    { name: "Heights", q: "high" },
  ];
</script>

<div class="flex flex-col items-center h-screen font-Manrope font-normal">
  <div class="max-w-[1280px] gap-4 flex flex-col bg-white">
    <header class="sticky top-0 w-full">
      <div class="w-full bg-white">
        <div
          class="flex justify-between items-center px-8 py-2 border-b border-b-gray-300"
        >
          <a href="/spots">
            <div class=" p-3 rounded-2xl cursor-pointer font-bold">
              <h1 class="text-2xl">Visit Neretva</h1>
            </div>
          </a>
          <div class="flex gap-8 font-semibold">
            {#each links as link}
              <button
                class="text-black rounded-2xl bg-white hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-500 font-medium text-sm px-2 py-2 -600"
                on:click={() => goto("/search?q=" + link.q)}
              >
                {link.name}
              </button>
            {/each}
          </div>

          <!-- svelte-ignore a11y-invalid-attribute -->

          <div class="flex items-center gap-4">
            <input
              type="text"
              id="input"
              bind:value={inputValue}
              class="block p-2 pl-10 rounded-xl w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Explore Neretva"
              required
            />
            <button
              type="submit"
              id="btn"
              disabled={!inputValue}
              class="text-black rounded-2xl bg-white hover:bg-[rgb(232,158,61)] hover:text-white focus:ring-4 focus:outline-none focus:ring-green-500 font-medium text-sm px-2 py-2"
              >Search</button
            >
          </div>
        </div>
        <!-- Additional navigation and dropdowns -->
      </div>
    </header>
    <div class="flex flex-col justify-center items-center bg-white">
      <main class="w-full">
        <slot />
      </main>
    </div>
  </div>
</div>
