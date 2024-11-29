const product = [
    { id: 1, image: 'baguette.png', title: 'Baguette', price: 5.99},
    { id: 2, image: 'brioche.png', title: 'Brioche', price: 6.99},
    { id: 3, image: 'cherryDanish.png', title: 'Cherry Danish', price: 3.25},
    { id: 4, image: 'croissant.png', title: 'Croissant', price: 4.25 },
    { id: 5, image: 'painAuChocolat.png', title: 'Pain Au Chocolat', price: 5.25},
    { id: 6, image: 'sourdough.png', title: 'Sourdough', price: 7.99 },
    { id: 7, image: 'wheatBread.png', title: 'Wheat Bread', price: 5.99 },
    { id: 8, image: 'whiteBread.png', title: 'White Bread', price: 5.99 },
];

const categories = [...new Set(product.map((item) => 
    {return item}))]
    let i=0;

    document.getElementById('root').innerHTML = categories.map((item, i) => {
        const { image, title, price } = item;
        return `
            <div class="box">
                <div class="img-box">
                    <img class="images" src="${image}" alt="${title}">
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>$${price}</h2>
                    <button onclick="addtocart(${i})">Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    display();
}

function delElement(index){
    cart.splice(index, 1);
    displaycart();
}

window.onload = function() {
    display(); 
};

function display() {
    let j = 0;
    let total = 0;

    if (document.getElementById("count")) {
        document.getElementById("count").innerHTML = cart.length;
    }

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        if (document.getElementById("total")) {
            document.getElementById("total").innerHTML = "$ 0.00";
        }
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            const { image, title, price } = item;

            const validPrice = parseFloat(price) || 0;
            total += validPrice;

            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}" alt="${title}">
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$${validPrice.toFixed(2)}</h2>
                    <span class="material-symbols-outlined" onclick='delElement(${j++})'>delete</span>
                </div>
            `;
        }).join('');

        if (document.getElementById("total")) {
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
        }
    }
}
