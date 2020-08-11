// --------------- Script handle daftar produk ---------------------------

let products = [
    { 
        name : 'Gaming Mouse',
        price : 1000000,
        id : 1
    }, 

    { 
        name : 'Mechanical Keyboard',
        price : 1500000,
        id : 2
    },

    { 
        name : 'Macbook Air',
        price : 10000000,
        id : 3
    },

]

let cart = [];

function generateProduct(arr){

    var content = "";

    for (var i=0; i<arr.length ; i++){

        content +=  `<div class="card" id="productCard">
                        <div class="card-body">
                        <label id="productName">${arr[i].name}</label> <br>Price : IDR <label id="ProductPrice">${arr[i].price}</label>
                        <button type="button" class="btn btn-primary" id="btnAdd" onclick="addToCart(${arr[i].id})">Add to cart</button>
                        </div>
                    </div>`;
                    

    }

    //console.log(content);

    document.getElementById("products").innerHTML = content;
}

function generateCart(arr){

    var content = "";

        console.log("arr length "+ arr.length);

        if (arr.length === 0){
            content += `<label>No item in cart</label>`;
        }
    

    
        for (var i=0; i<arr.length ; i++){

            content +=  `<div class="card" id="productCard">
                            <div class="card-body">
                            <label id="productName">${arr[i].name}</label> <br>Price : IDR <label id="ProductPrice">${arr[i].price}</label>
                            <button type="button" class="btn btn-warning" id="btnAdd" onclick="removeFromCart(${i})">Remove from cart</button>
                            </div>
                        </div>`;

        }


    document.getElementById("cartList").innerHTML = content;
}

function addToCart(id) {
    event.preventDefault()

    let result = products.find(data => data.id === id );

    //console.log(result);

    cart.push(result);

    //console.log(cart);


    localStorage.setItem('productsInCart', JSON.stringify(cart)); //
    
}

function removeFromCart(id) {
    event.preventDefault()

    

    //console.log(id);

    cart.splice(id, 1);

    //console.log(cart);


    localStorage.setItem('productsInCart', JSON.stringify(cart)); //
    checkStorage(); //refresh list
    
}

function checkStorage() {
    let itemInCart = localStorage.getItem('productsInCart'); // Mengambil data dari Local Storage
    
    cart = JSON.parse(itemInCart);

    console.log(cart);

    generateCart(cart);

}

//cek function yang dijalankan di masing-masing halaman

if(document.getElementById("products")!= null){generateProduct(products);}
