import { getProducts } from "./getproducts.js";
import { showinUI } from "./showinUI.js";


const products = document.querySelector(".products");

const data = await getProducts();
showinUI(data , products)