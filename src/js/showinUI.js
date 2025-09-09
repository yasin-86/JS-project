export function showinUI(list, container) {
  container.innerHTML = "";

  list.forEach((product) => {

    const card = document.createElement("div");
    card.classList.add(
      "w-3/10",
      "h-[450px]",
      "border",
      "border-[#D9D9D9]",
      "rounded-[2px]"
    );
    card.innerHTML = `              
    <div
                class="w-full bg-cover h-97 bg-center" style="background-image: url('${product.image}');"
              ></div>
              <div class=" flex flex-col justify-between">
                <div class="flex items-center product-description ">
                  <h5 class="text-black/65 text-[14px] font-medium pr-3 py-1.5">
                    ${product.title}
                  </h5>
                </div>
                <div
                  class="product-description  flex items-center justify-between text-[16px] font-medium"
                >
                  <h4>${product.description}</h4>
                  <span>${product.price}</span>
                </div>
              </div>
    `;
    container.appendChild(card);
  });
}
export default showinUI;