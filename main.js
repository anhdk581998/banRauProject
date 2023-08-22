// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//
let store = new Store()
let productsInStore = store.findAll();
showProducts()
// localStorage.setItem("listProduct",JSON.stringify([]));
function showProducts() {

    let str = ``
    for (let i = 0; i < productsInStore.length; i++) {
        str += ` 
       <div class="box">
            <img src="${productsInStore[i].img}" alt="">
            <span>${productsInStore[i].category}</span>
            <h2>${productsInStore[i].name}</h2>
            <h3 class="price">7000vnd <span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">${productsInStore[i].discount}</span>
        </div>
`
    }
    document.getElementById("product-container").innerHTML =
        str+`
     <!--box1-->
        <div class="box">
            <img src="image/p1.png" alt="">
            <span class="fruit" id="fruit">Fresh Items</span>
            <h2>Đào Tấn <br>1 quả 250g </h2>
            <h3 class="price">10,000vnd <span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>
        <!--box2-->
        <div class="box">
            <img src="image/p2.png" alt="">
            <span>Fresh Items</span>
            <h2>Ngũ cốc ăn kiêng <br>fruits 250g </h2>
            <h3 class="price">7000vnd <span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>
        <!--box3-->
        <div class="box">
            <img src="image/p3.png" alt="">
            <span>Fresh Items</span>
            <h2>Trà Đào Cam Sả <br> cốc </h2>
            <h3 class="price">25,000vnd <span>/cốc</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>
        <!--box4-->
        <div class="box">
            <img src="image/p4.png" alt="">
            <span>Fresh Items</span>
            <h2>Xà lách <br>1 bó </h2>
            <h3 class="price">7,000vnd <span>/bó</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>
        <!--box5-->
        <div class="box">
            <img src="image/p5.png" alt="">
            <span>Fresh Items</span>
            <h2>Ớt chỉ thiên <br>1 túi 250g </h2>
            <h3 class="price">15,000vnd <span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>
        <!--box6-->
        <div class="box">
            <img src="image/p6.png" alt="">
            <span>Fresh Items</span>
            <h2>Chuối tiêu thái <br> 250g </h2>
            <h3 class="price">27,900vnd <span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <i class='bx bx-heart'></i>
            <span class="discount">
          -25%</span>
        </div>`
        +
        `<div class="" id="inputProduct">
        </div>`
    ;
}

function showFormAdd() {
    document.getElementById('inputProduct').innerHTML=`
                        <div class="box">
                            <h2>nhập ảnh sản phẩm<input type="text" id="imgInput"></h2>
                            <span class="fruit" id="fruit1">Nhập loại sản phẩm <input type="text" id="categoryInput"></span>
                            <h2>nhập mô tả sản phẩm<input id="nameInput"></h2>
                            <h3 class="price">nhập giá sản phẩm: <input type="text" id="priceInput"> <span>/kg</span></h3>
                            
                          
                            <span class="">Nhập khuyến mãi:<input type="text" name="" id="discountInput"></span>
                            <a href="" class="btn" onclick="add()">Add<i class='bx bxs-right-arrow'></i></a>
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
    let discount = document.getElementById('discountInput').value;
    let product = new Product (img, category, name, price, discount);
    store.add(product);
    console.log(store)
    showProducts();
    document.getElementById('inputProduct').innerHTML = '';
}

