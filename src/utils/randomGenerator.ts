import { broadsidesList } from "data";

// This is mulberry32 from
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
export function getRandGenerator(a: number) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const getSeededGen = () => {
  const date = new Date();
  const dateStr =
    String(date.getDay()).padStart(2) + date.getDate() + date.getFullYear();
  return getRandGenerator(parseInt(dateStr));
};

export const getStableRandomBroadsides = () => {
  const gen = getSeededGen();
  // Possible to get duplicates, but not worrying for now
  return [gen(), gen(), gen(), gen(), gen()]
    .map((n) => Math.floor(n * broadsidesList.length))
    .map((n) => broadsidesList[n]);
};

export const getRandomBroadside = () => broadsidesList[Math.floor(Math.random() * broadsidesList.length)]