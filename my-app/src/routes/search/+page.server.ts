import { spots } from "$lib/sampleData";
export async function load({ params, url }) {
  let q = url.searchParams.get("q");

  const results = spots.filter((spot) =>
    spot.name.toLowerCase().includes(q.toLowerCase())
  );
  
  
  return { spots: results};
}
