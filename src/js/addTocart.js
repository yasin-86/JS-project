import { card } from "./app.js";

export function Add(id, list) {
  const idinfo = list.filter((item) => item.id == id)[0];

  console.log(idinfo);

  card.push(idinfo);
}
