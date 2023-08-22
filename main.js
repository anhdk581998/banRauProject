// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let store = new Store();
let array = store.findAll();
showProducts()

function showProducts() {
    let productInStore = store.findAll();
    let str = ``
    for (let i = 0; i < productInStore.length; i++) {
        str += `
       <div class="box">
            <img src="${array[i].img}" alt="">
            <span class="fruit">${array[i].category}</span>
            <h2>${array[i].name}</h2>
            <h3 class="price">7000vnd <span>/kg</span></h3>
            <i class='bx bx-cart-alt'></i>
            <i class='bx bx-heart'></i>
            <span class="discount">${array[i].discount}</span>
        </div>
`
    }
    document.getElementById('product-container').innerHTML = str;
}

function showFormAdd() {
    document.getElementById('inputProduct').innerHTML=`
                        <div class="box">
                            <h2>nhập ảnh sản phẩm<input type="text" id="imgInput"></h2>
                            <span class="fruit" id="fruit1">Nhập loại sản phẩm <input type="text" id="categoryInput"></span>
                            <h2>nhập mô tả sản phẩm<input id="nameInput"></h2>
                            <h3 class="price">nhập giá sản phẩm: <input type="text" id="priceInput"> <span>/kg</span></h3>
                            <i class='bx bx-cart-alt'></i>
                            <i class='bx bx-heart'></i>
                            <span class="">Nhập khuyến mãi:<input type="text" name="" id="discountInput"></span>
                            <a href="" class="btn" onclick="add()">Thêm Hàng<i class='bx bxs-right-arrow'></i></a>
                        </div>
    `
}
function remove(index) {
    let isconfirm = confirm('Ban co muon xóa sản phẩm không?');
    if (isconfirm) {
        store.remove(index);
        showProducts();
    }
}

function add() {
    let img = document.getElementById('imgInput').value;
    let category = document.getElementById('categoryInput').value;
    let name = document.getElementById('nameInput').value;
    let price = document.getElementById('priceInput').value;
    let discount = document.getElementById('image').value;
    let product = new Product (img, category, name, price, discount);
    store.add(product);
    console.log(store)
    showProducts();
    document.getElementById('inputProduct').innerHTML = '';
}

