<script>
  import "leaflet/dist/leaflet.css"; // Correct import for Leaflet CSS
  import L from "leaflet"; // Import Leaflet

  import { onMount } from "svelte";

  // Initialize the map when the component mounts
  onMount(() => {
    const map = L.map("map").setView([51.505, -0.09], 13); // Set initial map view and zoom level

    // Add OpenStreetMap tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    // Add a marker
    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.")
      .openPopup();
  });
</script>

<hero class="max-w-[1280px] w-full h-[550px]">
  <hero1>
    <div class="primary-container background description">
      <div class="wrapper">
        <!-- Your existing title and description here -->
        <div class="title">
          <h1 tabindex="-1">Material Design</h1>
          <div class="description ng-star-inserted">
            Material 3 is the latest version of Google’s open-source design
            system. Design and build beautiful, usable products with Material 3.
          </div>
        </div>

        <!-- Call to action buttons and other content -->
        <div class="ctas ng-star-inserted">
          <div class="ng-star-inserted">
            <a target="_self" href="/get-started">
              <button mioripple tabindex="-1" class="mio-button">
                <div class="state-overlay"></div>
                <span class="label">Get started</span>
                <div class="ripple"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Map container -->
    <div id="map" class="h-[550px] w-full"></div>
    <!-- Leaflet map will appear here -->
  </hero1>
</hero>
