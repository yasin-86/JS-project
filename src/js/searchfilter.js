export function searchProduct(product, keyword) {
  const filterProducts = product.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return filterProducts;
}
