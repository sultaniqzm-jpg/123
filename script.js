function goProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


function buyProduct(productName, price, image){

    openOrder(
        productName,
        price,
        image
    );

}


function contactAdmin(){

    window.open(
        "https://wa.me/02054631734",
        "_blank"
    );

}


function searchProducts(){

    const input =
    document.getElementById("search")
    .value
    .toLowerCase();


    const products =
    document.querySelectorAll(".product");


    products.forEach(product => {

        const text =
        product.innerText.toLowerCase();


        if(text.includes(input)){

            product.style.display = "block";

        }else{

            product.style.display = "none";

        }

    });

}


// =================
// ເມນູ
// =================

function openMenu(){

    document
    .getElementById("sideMenu")
    .classList.add("active");

}


function closeMenu(){

    document
    .getElementById("sideMenu")
    .classList.remove("active");

}


// =================
// ລະບົບສັ່ງຊື້
// =================

let qty = 1;

let currentPrice = 0;


function openOrder(name, price, image){

    document.getElementById("orderPopup").style.display = "block";

    document.getElementById("orderName").innerHTML = name;

    document.getElementById("orderPrice").innerHTML = price;

    document.getElementById("orderImage").src = image;


    currentPrice =
    Number(price.replace(/[^\d]/g,""));


    qty = 1;

    document.getElementById("qty").innerHTML = qty;

    updateTotal();

}


function closeOrder(){

    document.getElementById("orderPopup").style.display = "none";

    qty = 1;

    document.getElementById("qty").innerHTML = qty;

    updateTotal();

}


function plusQty(){

    qty++;

    document.getElementById("qty").innerHTML = qty;

    updateTotal();

}


function minusQty(){

    if(qty > 1){

        qty--;

    }


    document.getElementById("qty").innerHTML = qty;

    updateTotal();

}


function updateTotal(){

    let total = currentPrice * qty;


    document.getElementById("totalPrice").innerHTML =
    "฿" + total;

}
// =================
// ລະບົບຊຳລະເງິນ
// =================


function openPayment(){

    document
    .getElementById("paymentModal")
    .style.display = "flex";

}


function closePayment(){

    document
    .getElementById("paymentModal")
    .style.display = "none";

}


function showPayment(){

    document
    .getElementById("orderPopup")
    .style.display = "none";


    document
    .getElementById("paymentModal")
    .style.display = "flex";

}


function closePaymentBox(){

    document
    .getElementById("paymentModal")
    .style.display = "none";

}



// =================
// ເລື່ອນສິນຄ້າ
// =================

function scrollProducts(){

    document
    .getElementById("products")
    .scrollIntoView({
        behavior:"smooth"
    });

}



// =================
// ຕິດຕໍ່ຮ້ານ
// =================

function facebook(){

    window.open(
        "https://www.facebook.com/Sultaniqz",
        "_blank"
    );

}


function whatsapp(){

    window.open(
        "https://wa.me/02054631734",
        "_blank"
    );

}



// =================
// ປິດ Popup ເມື່ອກົດນອກ
// =================

window.onclick = function(event){

    let payment =
    document.getElementById("paymentModal");


    let order =
    document.getElementById("orderPopup");


    if(event.target == payment){

        payment.style.display = "none";

    }


    if(event.target == order){

        order.style.display = "none";

    }

}



// =================
// ເລີ່ມຕົ້ນ
// =================

document.addEventListener(
"DOMContentLoaded",
function(){

    let order =
    document.getElementById("orderPopup");


    if(order){

        order.style.display = "none";

    }


    let qr =
    document.getElementById("qrPopup");


    if(qr){

        qr.style.display = "none";

    }


});



// =================
// QR PAYMENT + SAVE HISTORY
// =================

function showQR(){

    let name =
    document.getElementById("orderName");


    let qty =
    document.getElementById("qty");


    let total =
    document.getElementById("totalPrice");



    let orderData = {

        name:name.innerHTML,

        qty:qty.innerHTML,

        total:total.innerHTML,

        date:new Date().toLocaleString()

    };



    let history =
    JSON.parse(localStorage.getItem("orders")) || [];



    history.push(orderData);



    localStorage.setItem(
        "orders",
        JSON.stringify(history)
    );



    // ส่งข้อมูลไป QR

    if(document.getElementById("qrName")){

        document.getElementById("qrName").innerHTML =
        name.innerHTML;

    }


    if(document.getElementById("qrQty")){

        document.getElementById("qrQty").innerHTML =
        qty.innerHTML;

    }


    if(document.getElementById("qrTotal")){

        document.getElementById("qrTotal").innerHTML =
        total.innerHTML;

    }



    let qrPopup =
    document.getElementById("qrPopup");


    if(qrPopup){

        qrPopup.style.display = "flex";

    }

}



function closeQR(){

    let qrPopup =
    document.getElementById("qrPopup");


    if(qrPopup){

        qrPopup.style.display = "none";

    }

}
// =================
// HISTORY ORDER
// =================


function openHistory(){

    let history =
    document.getElementById("historyPage");


    if(history){

        history.style.display = "flex";

    }


    loadHistory();

}



function closeHistory(){

    let history =
    document.getElementById("historyPage");


    if(history){

        history.style.display = "none";

    }

}




function loadHistory(){

    let history =
    JSON.parse(localStorage.getItem("orders")) || [];



    let box =
    document.getElementById("historyList");



    if(!box) return;



    box.innerHTML = "";



    history.reverse().forEach((order,index)=>{


        box.innerHTML += `

       <div class="order-card">

    <div class="order-title">
        #000${index+1}　${order.name}
    </div>

    <div class="order-row">
        <i class="fa-solid fa-box"></i>
        ຈຳນວນ: ${order.qty}

        <i class="fa-solid fa-coins"></i>
        ລວມ: ${order.total}
    </div>

    <div class="order-row">
        <i class="fa-solid fa-calendar-days"></i>
        ${order.date}
    </div>

   <div class="waiting">
    ປະຫວັດການກົດ
</div>

</div>

        `;


    });


}