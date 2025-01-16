<script>
  import { onMount } from "svelte";

  let L;
  let map;
  let selectedSpot = null;

  // This ensures that Leaflet is only imported and used in the client-side.
  onMount(async () => {
    if (!import.meta.env.SSR) {
      L = await import("leaflet");
      import("leaflet/dist/leaflet.css"); // Import CSS for Leaflet

      const spots = [
        {
          id: 1,
          name: "Diving Spot 1",
          lat: 43.1,
          lon: 17.4,
          activity: "Diving",
          description: "A great spot for deep sea diving.",
          image: "diving_image.jpg",
        },
        {
          id: 2,
          name: "Hiking Trail 1",
          lat: 43.15,
          lon: 17.45,
          activity: "Hiking",
          description: "A scenic trail with amazing views.",
          image: "hiking_image.jpg",
        },
      ];

      map = L.map("map").setView([43.1, 17.4], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add custom markers
      spots.forEach((spot) => {
        L.marker([spot.lat, spot.lon])
          .addTo(map)
          .bindPopup(`<b>${spot.name}</b><br>${spot.activity}`)
          .on("click", () => {
            selectedSpot = spot; // Update the sidebar with spot details
          });
      });
    }
  });

  // Handle sidebar close and reset selected spot
  const closeSidebar = () => {
    selectedSpot = null;
  };
</script>

<div
  id="map"
  on:click={closeSidebar}
  on:keydown={closeSidebar}
  aria-label="Close map"
  role="button"
  tabindex="0"
  class=" w-[100%] h-[80vh]"
></div>

{#if selectedSpot}
  <div
    class="w-72 fixed top-0 right-0 bg-white p-5 shadow-lg max-h-screen overflow-y-auto"
  >
    <button
      class="close-btn bg-[#f44336] color-white border-none p-10px
    cursor-pointer"
      on:click={closeSidebar}>Close</button
    >
    <h2 class="m-t-0">{selectedSpot.name}</h2>
    <p><strong>Activity:</strong> {selectedSpot.activity}</p>
    <p><strong>Description:</strong> {selectedSpot.description}</p>
    <img
      class="max-w-[100%] h-auto"
      src={selectedSpot.image}
      alt={selectedSpot.name}
    />
  </div>
{/if}
