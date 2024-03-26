import { spots } from "$lib/sampleData";

export async function load({ params }) {
  for (const spot of spots) {
    if (spot.id + "" == params.id) {
      return spot;
    }
  }
  try {
    const spotId = parseInt(params.id, 10);
    const spot = spots.find((s: any) => s.id === spotId);

    if (spot) {
      return {
        props: { data: spot },
      };
    } else {
      return {
        status: 404,
        error: new Error("Spot not found"),
      };
    }
  } catch (error) {
    console.error("Error loading spot data:", error);
    return {
      status: 500,
      error: "Internal Server ErrorR",
    };
  }
}
