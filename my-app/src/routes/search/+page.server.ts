import { spots } from "$lib/sampleData";
export async function load({ url }) {
  let q: any = url.searchParams.get("q");

  const results = spots.filter(
    (spot) =>
      spot.name.toLowerCase().includes(q.toLowerCase()) ||
      spot.description.toLowerCase().includes(q.toLowerCase()) ||
      spot.longDescription.toLowerCase().includes(q.toLowerCase()) ||
      spot.pic.toLowerCase().includes(q.toLowerCase())
  );

  return { spots: results };
}
