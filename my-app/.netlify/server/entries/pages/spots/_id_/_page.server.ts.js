import { s as spots } from "../../../../chunks/sampleData.js";
import { promises } from "fs";
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
    const star = formData.get("star");
    console.log("star chosen", star);
    await updateDataFile(star);
    return {};
  }
};
async function updateDataFile(newName) {
  const filePath = "static/sampleData.json";
  const data = JSON.parse(await promises.readFile(filePath, "utf8"));
  data.name = newName;
  await promises.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}
export {
  actions,
  load
};
