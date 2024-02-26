import { spots } from "$lib/sampleData";


export async function load({ params }) {
  for (const spot of spots) {
    if (spot.id + "" == params.id) {
      return spot;
    }
  }
  



}
