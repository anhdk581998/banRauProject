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
            <h3 class="price">${productsInStore[i].price}<span>/kg</span></h3>
            <i class='bx bxs-message-square-x' onclick="remove()"></i>
            <a href="#editProduct"  onclick="showFormEdit(${i})"><i class='bx bx-edit'></i></a>
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
            <i class='bx bx-edit'></i>
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
            <i class='bx bx-edit'></i>
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
            <i class='bx bx-edit'></i>
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
            <i class='bx bx-edit'></i>
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
            <i class='bx bx-edit'></i>
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
            <i class='bx bx-edit'></i>
            <span class="discount">
          -25%</span>
        </div>`
        +
        `<div class="" id="inputProduct">
        </div>`
    +
        `<div class="" id="editProduct">
        </div>`
    ;
}

function showFormAdd() {
    document.getElementById('inputProduct').innerHTML=`
                        <div class="box">
                            <h2>Ảnh sản phẩm: <br>    <input type="text" id="imgInput"></h2>
                            <span class="fruit" id="fruit1">Loại sản phẩm: <br>      <input type="text" id="categoryInput"></span>
                            <h2>Mô tả sản phẩm<input id="nameInput"></h2>
                            <h3 class="price">Giá sản phẩm: <br>      <input type="text" id="priceInput"> <span>/kg</span></h3>
                            
                          
                            <span class="">Khuyến mãi: <br>     <input type="text" name="" id="discountInput"><br></span>
                            <a href="" class="btn1" onclick="add()">  <br> ADD<i class='bx bxs-right-arrow'></i></a>
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

function edit(i) {
    let img = document.getElementById('imgInput2').value;
    let category = document.getElementById('categoryInput2').value;
    let name = document.getElementById('nameInput2').value;
    let price = document.getElementById('priceInput2').value;
    let discount = document.getElementById('discountInput2').value;
    let editProduct = new Product (img, category, name, price, discount);
    store.edit(i,editProduct);
    console.log(store)
    showProducts();
    document.getElementById('inputProduct').innerHTML = '';
}
function showFormEdit(i) {
    document.getElementById('inputProduct').innerHTML=`
                        <div class="box">
                            <h2>Ảnh sản phẩm: <br>    <input type="text" value="${productsInStore[i].img}" id="imgInput2"></h2>
                            <span class="fruit" id="fruit1">Loại sản phẩm:<br><input type="text" value="${productsInStore[i].category}" id="categoryInput2"></span>
                            <h2>Mô tả sản phẩm<input type="text" value="${productsInStore[i].name}"  id="nameInput2"></h2>
                            <h3 class="price">Giá sản phẩm: <br><input type="text" value="${productsInStore[i].price}" id="priceInput2"> <span>/kg</span></h3>                     
                            <span class="">Khuyến mãi: <br>     <input type="text" value="${productsInStore[i].discount}" id="discountInput2"><br></span>
                            <a href="" class="btn1" onclick="edit(${i})">  <br> Sửa<i class='bx bxs-right-arrow'></i></a>
                        </div>
    `
}

// <div className="box">
//     <img src="${productsInStore[i].img}" alt="">
//         <span>${productsInStore[i].category}</span>
//         <h2>${productsInStore[i].name}</h2>
//         <h3 className="price">7000vnd <span>/kg</span></h3>
//         <i className='bx bxs-message-square-x' onClick="remove()"></i>
//         <i className='bx bx-heart'></i>
//         <span className="discount">${productsInStore[i].discount}</span>
// </div>