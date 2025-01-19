import { promises } from "fs";
async function load({ params }) {
  const filePath = "static/sampleData1.json";
  const data = JSON.parse(await promises.readFile(filePath, "utf8"));
  return { spots: data };
}
export {
  load
};
