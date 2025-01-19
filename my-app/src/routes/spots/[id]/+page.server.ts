import { spots } from "$lib/sampleData";
import { promises as fs } from "fs";

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

export const actions = {
  myform: async ({ request }) => {
    const formData = await request.formData();
    const selRating = formData.get("selRating");
    const spotId = formData.get("spotId");
    console.log(spotId, selRating);

    // await updateDataFile(star, spots);

    return {};
  },
};

async function updateDataFile(newName: any, spots: any) {
  // const filePath = "static/sampleData.json";

  const getThatID = spots.find((spot: any) => spot.id == newName);
  console.log(getThatID);

  // const data = JSON.parse(await fs.readFile(filePath, "utf8"));

  // await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

// import Database from "better-sqlite3";
// import { spots as importedSpots } from "$lib/sampleData";
// import { error } from "@sveltejs/kit";
// const db = new Database("./chinook.db");

// actions.post = async function () {
//   const db = new Database("./chinook.db");
//   if (!db) {
//     console.error(error);
//   }
//   console.log("Connected to the chinook database.");
// };
