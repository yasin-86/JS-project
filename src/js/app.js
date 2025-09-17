import { filterProductsFunc } from "./filterproducts.js";
import { getProducts } from "./getproducts.js";
import { searchProduct } from "./searchfilter.js";
import { showinUI } from "./showinUI.js";

const products = document.querySelector(".products");
const filterProducts = document.querySelectorAll(".filterProducts");
const searchInput = document.querySelector(".searchInput");
export const card = [];


const data = await getProducts();
showinUI(data, products);

filterProducts.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.textContent.trim() === "All") {
      showinUI(data, products);
    } else {
      const newFilterList = filterProductsFunc(
        data,
        e.target.textContent.trim()
      );
      showinUI(newFilterList, products);
    }
  });
});

searchInput.addEventListener("input", (e) => {
  const searchfilter = searchProduct(data, e.target.value);
  showinUI(searchfilter, products);
});
