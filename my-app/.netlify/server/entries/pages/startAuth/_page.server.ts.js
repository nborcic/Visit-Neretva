import { s as spots } from "../../../chunks/sampleData.js";
async function load({ params }) {
  for (const spot of spots) {
    if (spot.id + "" == params.id) {
      return spot;
    }
  }
}
export {
  load
};
