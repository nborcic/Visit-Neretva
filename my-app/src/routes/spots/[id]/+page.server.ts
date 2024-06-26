import { spots } from "$lib/sampleData";
import { promises as fs } from "fs";
import { getInitialTracks } from "$lib/server/db";
import type { PageServerLoad } from "./$types";

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
//////////asdasd
export const actions = {
  myform: async ({ request }) => {
    const formData = await request.formData();
    const star = formData.get("star");
    console.log("star chosen", star);

    await updateDataFile(star);

    return {};
  },
};

async function updateDataFile(newName: any) {
  const filePath = "static/sampleData.json";

  const data = JSON.parse(await fs.readFile(filePath, "utf8"));

  data.name = newName;
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

import Database from "better-sqlite3";
import { spots as importedSpots } from "$lib/sampleData";
import { error } from "@sveltejs/kit";
const db = new Database("./chinook.db");

actions.post = async function () {
  const db = new Database("./chinook.db");
  if (!db) {
    console.error(error);
  }
  console.log("Connected to the chinook database.");
};

importedSpots.forEach((spot) => {
  const stmt = db.run(
    `INSERT INTO spots(name, type, description, longDescription, averageRating, pic, class, id, price, address, website, phoneNumber, numRating) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  );
  stmt.run([
    spot.name,
    spot.type,
    spot.description,
    spot.longDescription,
    spot.averageRating,
    spot.pic,
    spot.class,
    spot.id,
    spot.price,
    spot.address,
    spot.website,
    spot.phoneNumber,
    spot.numRating,
  ]);

  db.close();

  return {
    body: {
      message: "Data imported successfully",
    },
  };
});
