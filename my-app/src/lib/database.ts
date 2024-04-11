import { promises as fs } from "fs";
const filePath = "static/sampleData.json";
async function writeDataToFile(spots: any) {
  const data = JSON.parse(await fs.readFile(filePath, "utf8"));

  await fs.writeFile(filePath, JSON.stringify(spots, null, 2), "utf8");
  console.log("Data written to file:");
}

async function readDataFromFile(filePath: string): Promise<any> {
  const data = JSON.parse(await fs.readFile(filePath, "utf8"));
}
