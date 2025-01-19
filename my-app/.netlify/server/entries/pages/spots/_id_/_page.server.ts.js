import { s as spots } from "../../../../chunks/sampleData.js";
async function load({ params }) {
  for (const spot of spots) {
    if (spot.id + "" == params.id) {
      return spot;
    }
  }
  try {
    const spotId = parseInt(params.id, 10);
    const spot = spots.find((s) => s.id === spotId);
    if (spot) {
      return {
        props: { data: spot }
      };
    } else {
      return {
        status: 404,
        error: new Error("Spot not found")
      };
    }
  } catch (error) {
    console.error("Error loading spot data:", error);
    return {
      status: 500,
      error: "Internal Server ErrorR"
    };
  }
}
const actions = {
  myform: async ({ request }) => {
    const formData = await request.formData();
    const selRating = formData.get("selRating");
    const spotId = formData.get("spotId");
    console.log(spotId, selRating);
    return {};
  }
};
export {
  actions,
  load
};
