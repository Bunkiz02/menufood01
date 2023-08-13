var product = [{
    id: 1,
    img: 'https://media.istockphoto.com/id/1150228885/photo/delicious-thai-style-hotspot-on-table.webp?b=1&s=170667a&w=0&k=20&c=X9UIdJ7v19F-RYwVZlFQaFVGh5R6I4xRb9-4nF0sTIE=',
    name: 'เเจ่วฮ้อน',
    price: 230,
    description: ' shabu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum iure quidem nihil corrupti corporis.',
    type: 'shabu'
}, {
    id: 2,
    img: 'https://media.istockphoto.com/id/1539178843/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%97%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=OkdZdw5s2GvLQ-WlH5joJKsPpkS30ptIycCGdo_i9Ww=',
    name: 'กระเพรา',
    price: 60,
    description: ' kapon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum iure quidem nihil corrupti corporis.',
    type: 'thaifood'

}, {
    id: 3,
    img: 'https://images.unsplash.com/photo-1556994302-558991b74265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name: 'โค้ก',
    price: 30,
    description: ' cola lime Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum iure quidem nihil corrupti corporis.',
    type: 'drink'
},
{
    id: 4,
    img: 'https://media.istockphoto.com/id/1303988263/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1.jpg?s=612x612&w=0&k=20&c=-i5j7Go5T5WMGTOP4Z4W5V1xqxm88JyJNwYu74xkBQ0=',
    name: 'ผัดไท',
    price: 80,
    description: ' kapon Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum iure quidem nihil corrupti corporis.',
    type: 'thaifood'

}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `  <div onclick="openproductDetail(${i})" class="product-items ${product[i].type}">
                   <img class="product-img"
                    src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 1vw;">${numberWithCommas(product[i].price)} บาท</p>
                    </div>`;


    }
    $("#productlist").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function searchsomething(elem) {
    console.log('#' + elem.id)
    var value = $('#' + elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if (product[i].name.includes(value)) {
            html += `  <div onclick="openproductDetail(${i})" class="product-items ${product[i].type}">
            <img class="product-img"
             src="${product[i].img}" alt="">
             <p style="font-size: 1.2vw;">${product[i].name}</p>
             <p style="font-size: 1vw;">${numberWithCommas(product[i].price)} บาท</p>
             </div>`;

        }



    }
    if (html == '') {
        $("#productlist").html(`<p>Not Found Product</p>`);
    } else {
        $("#productlist").html(html);
    }
}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if (param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("." + param).css('display', 'block')
    }

}
var productindex = 0
function openproductDetail(test) {
    productindex = test;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[test].img);
    $("#mdd-name").text(product[test].name);
    $("#mdd-price").text(numberWithCommas(product[test].price) + ' บาท');
    $("#mdd-desc").text(product[test].description);
}

function closeModal() {
    $(".modal").css('display', 'none')
}
var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if (productindex == cart[i].test) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }

    }

    if (pass) {
        var obj = {
            test: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        cart.push(obj)
    }
    console.log('obj', cart)

    Swal.fire({
        icon: 'success',
        title: product[productindex].name + 'เพิ่มลงในรายการอาหารเเล้ว'
    })

    $("#cartcount").css('display', 'flex').text(cart.length)

}

function openCart() {
    $('#modalCart').css('display', 'flex')
    rendercart();
}

function rendercart() {
    if (cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += ` <div class="cartlist-items">
            <div class="cartlist-left">
                <img src="${cart[i].img}" alt="">
                <div class="cartlist-detail">
                    <p style="font-size: 1.5vw;">${cart[i].name}</p>
                    <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count)}  บาท</p>
                </div>
            </div>
            <div class="cartlist-right">
                <p onclick="deinitems('-',${i})" class="btnc">-</p>
                <p  id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                <p  onclick="deinitems('+',${i})" class="btnc">+</p>
            </div>
        </div>`;
        }

        $("#mycart").html(html)


    }
    else {
        $("#mycart").html(`<p>ไม่มีรายการอาหาร</p>`)
    }
}

function deinitems(action, test) {
    if (action == '-') {
        if (cart[test].count > 0) {
            cart[test].count--;
            $("#countitems" + test).text(cart[test].count)

            if (cart[test].count <= 0) {
                swal.fire({
                    icon: 'warning',
                    title: 'คุณต้องการลบรายการอาหารใช่หรือไม่?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'ลบ',
                    cancelButtonText: 'ยกเลิก'
                }).then((res) => {
                    if (res.isConfirmed) {
                        cart.splice(test, 1)
                        rendercart();
                        console.log(cart)
                        $("#cartcount").css('display', 'flex').text(cart.length)

                        if (cart.length <= 0) {
                            $("#cartcount").css('display', 'none')
                        }
                        else{
                            cart[test].count++;
                            $("#countitems" + test).text(cart[test].count)
                        }

                    }
                })
            }
        }
    }
    else if (action == '+') {
        cart[test].count++;
        $("#countitems" + test).text(cart[test].count)

    }
}

function buynow(test){
   
    swal.fire({
            icon: 'success',
            title:'ยืนยันออเดอร์เเล้ว'
        
    }).then((res) => {
        if (res.isConfirmed) {
            cart.splice(test, 1)
            rendercart();
            console.log(cart)
            $("#cartcount").css('display', 'flex').text(cart.length)

            if (cart.length <= 0) {
                $("#cartcount").css('display', 'none')
            }
            else{
                cart[test].count++;
                $("#countitems" + test).text(cart[test].count)
            }

        }
    })
}