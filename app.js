var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// ============================

let menu = document.querySelector(".menu_items");

let basket = [];

//function tao ra menu tu data trong "data.js"
let generateMenu = () => {
  return (menu.innerHTML = shopData
    .map((x) => {
      let { id, name, price, des, img } = x;
      return `
    <div id=product-id-${id} class="item">
      <div class="item_photo">
        <img src=${img} />
      </div>
      <div class="item-info">
        <span class="item-name">${name}</span>
        <span class="item-des">${des}</span>
        <div class="bot-info">
        <span class="item-price">${price} VNĐ</span>
        <div>
        <span>Số lượng:</span>  
        <input id=quant-${id} class="quantity" min="1" type="number" value="1" onkeypress="return event.charCode >= 48"/>
        </div>
        </div>
        <button class="add" onclick="updateCart(${id})">Thêm vào giỏ hàng</button>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateMenu();

//function khi an nut "add to cart" se update du lieu trong basket
let updateCart = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: +document.querySelector(`#quant-${id}`).value,
    });
  } else {
    search.item += +document.querySelector(`#quant-${id}`).value;
  }

  localStorage.setItem("data", JSON.stringify(basket));
  cartTotal();
};

basket = JSON.parse(localStorage.getItem("data")) || [];

//function tinh total hang trong cart
let cartTotal = () => {
  let cartIcon = document.querySelector(".cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

cartTotal();
// >>>>>>> 65170fd0f7dfa64710e7b0e75a92995bf1d2abe3
