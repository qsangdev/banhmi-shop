let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

//copy lai function tinh total do trong gio hang
let cartTotal = () => {
  let cartIcon = document.querySelector(".cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

cartTotal();

//function tao ra cac item trong gio hang
let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopData.find((y) => y.id === id) || [];
        return `
            <div class = 'cart-items'> 
                <img width="100" height="100"  src="${search.img}" />
                <div class="details">

                <div class="title-price-x"> 
                    <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price">${search.price} VNĐ</p>
                    </h4>
                    <p id="delete" onclick="removeItem(${id})">X</p>
                </div>

                <div class="cart-buttons"> 
                    <div>
                    <span>Số lượng:</span>  
                    <input id=quant-${id} class="quantity" type="number" min="0"  value="${item}" onchange="updateFunc(${id},this.value)"/>
                    </div>
                </div>
                <h3>${item * search.price} VNĐ</h3>
                </div>
            </div>
            `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2>Giỏ hàng rỗng</h2>
        <a href = "index.html#menu">
            <button class="homeBtn"> Mua thêm </button>
        </a>
        `;
  }
};

generateCartItems();

//function update gio hang
let updateFunc = (id, val) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  search.item = +val;
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  totalAmount();
  cartTotal();
};

//function xoa item trong gio hang
let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  totalAmount();
  cartTotal();
};

//function tinh tong tien hoa don
let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
        <h2>Tổng thanh toán: ${amount} VNĐ</h2>
        <a href = "index.html#menu">
            <button class="homeBtn"> Mua thêm </button>
        </a>
        <button onclick="checkout()" class="checkout">Thanh toán</button>
        <button onclick="clearCart()" class="removeAll">Xóa hết</button>
        `;
  } else return;
};

totalAmount();

//function xoa het items trong gio hang
let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

// fucntion thanh toan

function checkout() {
  let person = prompt("Nhập tên của bạn:", "");
  if (person == null || person == "") {
    alert("Vui lòng nhập tên.");
    return;
  }
  let location = prompt("Nhập địa chỉ:", "");
  if (location == null || location == "") {
    alert("Vui lòng nhập địa chỉ. ");
    return;
  }
  let number = prompt("Nhập số điện thoại:", "");
  if (number == null || number == "") {
    alert("Vui lòng nhập số điện thoại.");
    return;
  }
  {
    alert("Thanh toán thành công!");
    clearCart();
  }
}
