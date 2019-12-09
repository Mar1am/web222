
// import { url } from "inspector";
/** Add any JavaScript you need to this file. */

var itemData = [
    {
        name: 'The Renaissance Circle',
        description: 'Mango Mask',
        price: '5.99',
        image: './images/skincare/naturals_1.jpg'
    },
    {
        name: 'Shops of Youth',
        description: 'Herbal Sheet Mask',
        price: '8.99',
        image: './images/skincare/naturals_2.jpg'
    },
    {
        name: 'Vya Naturals',
        description: 'Vitamin C Serum',
        price: '7.99',
        image: './images/skincare/naturals_3.jpg'
    },
    {
        name: 'I\'m Fabulous',
        description: 'St. Barth Body Oil',
        price: '12.99',
        image: './images/skincare/regular_1.jpg'
    },
    {
        name: 'Therapeutic CBD',
        description: 'Skin Balm',
        price: '14.99',
        image: './images/skincare/regular_2.jpg'
    },
    {
        name: 'The Brandless Company',
        description: 'Facial Toner + Wipes',
        price: '16.99',
        image: './images/skincare/regular_3.jpg'
    },
    {
        name: 'Bourjois Rouge Edition',
        description: 'Velvet Lipstick',
        price: '9.96',
        image: './images/skincare/makeup_1.jpg'
    },
    {
        name: 'BECCA Ultimate',
        description: 'Coral Pink Lipstick',
        price: '32.00',
        image: './images/skincare/makeup_2.jpg'
    },
    {
        name: 'Shavova Professional',
        description: 'Foundation',
        price: '14.99',
        image: './images/skincare/makeup_3.jpg'
    },
    {
        name: 'Georgio Armani',
        description: 'SUN di Gioia',
        price: '105.00',
        image: './images/skincare/perfumes_1.jpg'
    },
    {
        name: 'CHANEL Paris',
        description: 'Gabrielle',
        price: '135.00',
        image: './images/skincare/perfumes_2.jpg'
    },
    {
        name: 'L Eau Laurissi',
        description: 'Perfume',
        price: '152.00',
        image: './images/skincare/perfumes_3.jpg'
    }
];

function filterItems(criteria) {
    var card, i;
    card = document.querySelectorAll('item-row');
    if(criteria === "all") {
        criteria = "";
    }

    for(i = 0; i < card.length; i++) {
        removeCard(card[i], "show");
        if(card[i].className.indexOf(criteria) > -1) {
            addCard(card[i], "show");
        }
    }
}

function addClass(element, className) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = className.split(" ");
    for(i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, className) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = className.split(" ");
    for(i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
           arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}