import { s as spots } from "../../../chunks/sampleData.js";
async function load({ url }) {
  let q = url.searchParams.get("q");
  const results = spots.filter(
    (spot) => spot.name.toLowerCase().includes(q.toLowerCase()) || spot.description.toLowerCase().includes(q.toLowerCase()) || spot.longDescription.toLowerCase().includes(q.toLowerCase()) || spot.pic.toLowerCase().includes(q.toLowerCase())
  );
  return { spots: results };
}
export {
  load
};
