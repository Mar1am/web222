
// import { url } from "inspector";
/** Add any JavaScript you need to this file. */

$(document).ready(() => {
    var products = [
        {
            category: "skincare",
            items: [
                {
                    name: 'The Renaissance Circle',
                    description: 'Mango Mask',
                    price: '$5.99',
                    image: './images/skincare/naturals_1.jpg',
                    tags: [ "regular" ],
                },
                {
                    name: 'Shops of Youth',
                    description: 'Herbal Sheet Mask',
                    price: '$8.99',
                    image: './images/skincare/naturals_2.jpg',
                    tags: [ "regular" ],
                },
                {
                    name: 'Vya Naturals',
                    description: 'Vitamin C Serum',
                    price: '$7.99',
                    image: './images/skincare/naturals_3.jpg',
                    tags: [ "regular" ],
                },
                {
                    name: 'I\'m Fabulous',
                    description: 'St. Barth Body Oil',
                    price: '$12.99',
                    image: './images/skincare/regular_1.jpg',
                    tags: [ "natural" ],
                },
                {
                    name: 'Therapeutic CBD',
                    description: 'Skin Balm',
                    price: '$14.99',
                    image: './images/skincare/regular_2.jpg',
                    tags: [ "natural" ],
                },
                {
                    name: 'The Brandless Company',
                    description: 'Facial Toner + Wipes',
                    price: '$16.99',
                    image: './images/skincare/regular_3.jpg',
                    tags: [ "regular" ],
                },
            ]
        },
        {
            category: "makeup",
            items: [
                {
                    name: 'Bourjois Rouge Edition',
                    description: 'Velvet Lipstick',
                    price: '$9.96',
                    image: './images/skincare/makeup_1.jpg',
                    tags: [ "regular" ],
                },
                {
                    name: 'BECCA Ultimate',
                    description: 'Coral Pink Lipstick',
                    price: '$32.00',
                    image: './images/skincare/makeup_2.jpg',
                    tags: [ "gift-sets" ],
                },
                {
                    name: 'Shavova Professional',
                    description: 'Foundation',
                    price: '$14.99',
                    image: './images/skincare/makeup_3.jpg',
                    tags: [ "gift-sets" ],
                },
                {
                    name: 'Georgio Armani',
                    description: 'SUN di Gioia',
                    price: '$105.00',
                    image: './images/skincare/perfumes_1.jpg',
                    tags: [ "regular" ],
                },
                {
                    name: 'CHANEL Paris',
                    description: 'Gabrielle',
                    price: '$135.00',
                    image: './images/skincare/perfumes_2.jpg',
                    tags: [ "regular" ],
                },
            ]
        },
        {
            category: "perfumes",
            items: [
                {
                    name: 'Georgio Armani',
                    description: 'SUN di Gioia',
                    price: '$105.00',
                    image: './images/skincare/perfumes_1.jpg',
                    tags: [ "exclusive" ],
                },
                {
                    name: 'CHANEL Paris',
                    description: 'Gabrielle',
                    price: '$135.00',
                    image: './images/skincare/perfumes_2.jpg'
                },
                {
                    name: 'L Eau Laurissi',
                    description: 'Perfume',
                    price: '$152.00',
                    image: './images/skincare/perfumes_3.jpg',
                    tags: [ "exclusive" ],
                }
            ]
        }
    ];
    
    products.forEach((product, productIndex) => {
        console.log(product.category);
    
        var container = $("#"+product.category+" .items-grid")[0];

        console.log($(container));
    
        product.items.forEach((item, itemIndex) => {
            var productCard = $("<div></div>").addClass("item");
    
            // contruct image container
            var imageContainer = $("<div></div>").addClass("img-container");
            var buyButton = $("<div></div>").addClass("buy-button").append(
                $("<button></button>").append(
                    $("<a></a>").attr("href", "#").text("Buy")
                )
            );
            var image = $("<img/>").attr("src", item.image);
            $(imageContainer).append($(buyButton));
            $(imageContainer).append($(image));
            $(productCard).append($(imageContainer));
    
            // construct item info container
            var itemInfoContainer = $("<div></div>").addClass("item-info");
            $(itemInfoContainer).append($("<h3></h3>").addClass("item-name").text(item.name));
            $(itemInfoContainer).append($("<p></p>").addClass("item-description").text(item.description));
            $(itemInfoContainer).append($("<span></span>").addClass("item-price").text(item.price));
            $(productCard).append($(itemInfoContainer)).data("data", item);

            console.log($(productCard).data("data"));
    
            $(container).append($(productCard));
        });
    });
    
    
    
    
    
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
});
