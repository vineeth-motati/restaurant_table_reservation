var restaurant = {
    menu: {
        items: [
            {
                name: 'coke',
                price: 20,
                category: 'drinks',
                sizes: ['small', 'large'],
                img:
                    'https://m.media-amazon.com/images/I/51jKm1MY43L._SL1000_.jpg',
                inCart: 0,
            },
            {
                name: 'pepsi',
                price: 20,
                category: 'drinks',
                sizes: ['small', 'large'],
                img:
                    'https://images-na.ssl-images-amazon.com/images/I/41CBNhIJt0L.jpg',
                inCart: 0,
            },
            {
                name: 'water',
                price: 20,
                category: 'drinks',
                sizes: ['small', 'large'],
                img:
                    'https://images-na.ssl-images-amazon.com/images/I/810oxJndUFL._SL1500_.jpg',
                inCart: 0,
            },
            {
                name: 'burger',
                price: 40,
                category: 'junk food',
                sizes: ['small', 'large'],
                img:
                    'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg',
                inCart: 0,
            },
            {
                name: 'fries',
                price: 20,
                category: 'junk food',
                sizes: ['small', 'large'],
                img:
                    'https://thumbor.thedailymeal.com/r19Dr1epeqxTZm6O5CuFj0T0kME=//https://www.thedailymeal.com/sites/default/files/recipe/2018/iStock-687999118_1_.jpg',
                inCart: 0,
            },
            {
                name: 'pizza',
                price: 20,
                category: 'junk food',
                sizes: ['small', 'large'],
                img:
                    'https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=',
                inCart: 0,
            },
        ],
    },
};

// function checkOut() {
//     var popup = document.getElementById('checkout');
//     popup.classList.toggle('show');
// }
// window.checkOut = checkOut;

function renderItems(item) {
    var main = document.getElementById('main');

    var itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');
    main.appendChild(itemWrapper);

    var itemName = document.createElement('label');
    itemName.classList.add('item-name');
    itemName.textContent = item.name.toUpperCase(); //
    itemWrapper.appendChild(itemName);

    var addToCart = document.createElement('button');
    addToCart.classList.add('add-to-cart');
    addToCart.textContent = 'Add to cart';
    itemWrapper.appendChild(addToCart);

    var img = document.createElement('img');
    img.setAttribute('src', item.img);
    itemWrapper.appendChild(img);

    var itemPrice = document.createElement('label');
    // itemPrice.classList.add('item-name');
    itemPrice.textContent = `Price: ${item.price}`; //
    itemWrapper.appendChild(itemPrice);
}

for (let i = 0; i < restaurant.menu.items.length; i++) {
    renderItems(restaurant.menu.items[i]);
}

let carts = document.querySelectorAll('.add-to-cart');
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(restaurant.menu.items[i]);
        totalCost(restaurant.menu.items[i]);
    });
}

function onLoadCartNubers() {
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
    if (productNumbers) {
        document.querySelector('#cart span').textContent = productNumbers;
    }
}
onLoadCartNubers();
function cartNumbers(item) {
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('#cart .number-of-items').textContent =
            productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#cart span').textContent = 1;
    }
    setItems(item);
}

function setItems(item) {
    let cartItems = localStorage.getItem('itemsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[item.name] == undefined) {
            cartItems = {
                ...cartItems,
                [item.name]: item,
            };
        }
        cartItems[item.name].inCart += 1;
    } else {
        item.inCart = 1;
        cartItems = {
            [item.name]: item,
        };
    }
    localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
}

function totalCost(item) {
    let totalCost = localStorage.getItem('totalCost');
    if (totalCost != null) {
        totalCost = parseInt(totalCost);
        localStorage.setItem('totalCost', totalCost + item.price);
    } else {
        localStorage.setItem('totalCost', item.price);
    }
}
document.querySelectorAll('.customer-mode')[0].click();
