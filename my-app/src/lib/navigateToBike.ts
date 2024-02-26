export let navigateToBike;

function navigateToBike() {
    return spots.filter((spot) => spot.name.includes("bik"));
  }