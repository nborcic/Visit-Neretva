import { promises as fs } from "fs";
export async function load({ params }) {
  const filePath = "static/sampleData1.json";
  // await fs.writeFile(filePath, JSON.stringify(spots, null, 2), "utf8"); // undo to reset sampleData file
  const data = JSON.parse(await fs.readFile(filePath, "utf8"));

  return { spots: data };
}
