<script lang="ts">
  export let data;

  import "$lib/sampleData.ts";
</script>

<div class="flex flex-col items-center h-screen bg-white">
  <div class="max-w-[1280px] gap-4 flex flex-col">
    <div class="flex flex-col justify-center items-center bg-gray-100">
      <main class="w-full p-4">
        <slot />
      </main>
    </div>
  </div>
</div>
