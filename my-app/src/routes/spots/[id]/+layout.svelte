<script>
    import "../app.css";
    
  </script>
function navigateToBike() {
    
    let bikSpots = spots.filter((spot) => spot.name.includes("bik"));
    return bikSpots;

    let bikSpots = navigateToBike();

    return { spots, bikSpots };
    console.log({ spots, bikSpots });
  }

<main class="w-full p-4">
    <slot />
  </main>