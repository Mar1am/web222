/** Add any JavaScript you need to this file. */

var itemData = [
    {
        name: "The Renaissance Circle",
        description: "Mango Mask",
        price: "5.99",
        image: "./images/skincare/naturals_1.jpg",
        tag: "natural"
    },
    {
        name: "Shops of Youth",
        description: "Herbal Sheet Mask",
        price: "8.99",
        image: "./images/skincare/naturals_2.jpg",
        tag: "natural"
    },
    {
        name: "Vya Naturals",
        description: "Vitamin C Serum",
        price: "7.99",
        image: "./images/skincare/naturals_3.jpg",
        tag: "natural"
    },
    {
        name: "I'm Fabulous",
        description: "St. Barth Body Oil",
        price: "12.99",
        image: "./images/skincare/regular_1.jpg",
        tag: "regular"
    },
    {
        name: "Therapeutic CBD",
        description: "Skin Balm",
        price: "14.99",
        image: "./images/skincare/regular_2.jpg",
        tag: "regular"
    },
    {
        name: "The Brandless Company",
        description: "Facial Toner + Wipes",
        price: "16.99",
        image: "./images/skincare/regular_3.jpg",
        tag: "regular"
    },
    {
        name: "Bourjois Rouge Edition",
        description: "Velvet Lipstick",
        price: "9.96",
        image: "./images/skincare/makeup_1.jpg",
        tag: "general"
    },
    {
        name: "BECCA Ultimate",
        description: "Coral Pink Lipstick",
        price: "32.00",
        image: "./images/skincare/makeup_2.jpg",
        tag: "general"
    },
    {
        name: "Shavova Professional",
        description: "Foundation",
        price: "14.99",
        image: "./images/skincare/makeup_3.jpg",
        tag: "general"
    },
    {
        name: "Bobby Brown Makeup Set",
        description: "13 piece set",
        price: "49.99",
        image: "./images/skincare/bobby_brown_makeup_set.jpg",
        tag: "giftset"
    },
    {
        name: "The Brandless Company",
        description: "4pc Makeup Brush Set",
        price: "25.99",
        image: "./images/skincare/brandless_brush_Set.jpg",
        tag: "giftset"
    },
    {
        name: "Chanel Cosmetic Set",
        description: "Makeup Gift Set",
        price: "45.99",
        image: "./images/skincare/chanel_set.jpg",
        tag: "giftset"
    },
    {
        name: "Georgio Armani",
        description: "SUN di Gioia",
        price: "105.00",
        image: "./images/skincare/perfumes_1.jpg",
        tag: "perfume"
    },
    {
        name: "CHANEL Paris",
        description: "Gabrielle",
        price: "135.00",
        image: "./images/skincare/perfumes_2.jpg",
        tag: "perfume"
    },
    {
        name: "L Eau Laurissi",
        description: "Perfume",
        price: "152.00",
        image: "./images/skincare/perfumes_3.jpg",
        tag: "perfume"
    }
];

var skincareRegular = itemData.filter(item => item.tag === "regular");
var skincareNatural = itemData.filter(item => item.tag === "natural");
var makeupGeneral = itemData.filter(item => item.tag === "general");
var makeupSet = itemData.filter(item => item.tag === "giftset");
var perfumes = itemData.filter(item => item.tag === "perfume");

var gridBuilder = function(criteria, section) {
    var gridContainer = section.querySelector(".items-grid");
    var row = document.createElement("div");
    criteria.forEach(item => {
        row.className = "item-row";

        var itemCard = document.createElement("div");
        itemCard.className = "item";

        var imgContainer = document.createElement("div");
        imgContainer.className = "img-container";
        var img = document.createElement("img");
        img.src = item.image;

        var btnContainer = document.createElement("div");
        btnContainer.className = "buy-button";
        var btn = document.createElement("button");
        btn.innerText = "Buy";
        var link = document.createElement("a");
        link.href = "#";
        btn.appendChild(link);
        btnContainer.appendChild(btn);

        imgContainer.appendChild(btnContainer);
        imgContainer.appendChild(img);
        itemCard.appendChild(imgContainer);

        var info = document.createElement("div");
        info.className = "item-info";

        var name = document.createElement("h3");
        name.className = "item-name";
        name.innerText = item.name;
        info.appendChild(name);

        var desc = document.createElement("p");
        desc.className = "item-description";
        desc.innerText = item.description;
        var br = document.createElement("br");

        var price = document.createElement("span");
        price.className = "item-price";
        price.innerText = item.price;

        desc.appendChild(br);
        desc.appendChild(price);
        info.appendChild(desc);

        itemCard.appendChild(info);
        row.appendChild(itemCard);
    });
    gridContainer.appendChild(row);
};

var clearGrid = function(selection) {
    var ancestor = document.querySelector(selection);
    var parent = ancestor.querySelector(".items-grid");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

window.addEventListener("load", function() {
    gridBuilder(skincareRegular, document.querySelector("#skincare"));
    gridBuilder(skincareNatural, document.querySelector("#skincare"));
    gridBuilder(makeupGeneral, document.querySelector("#makeup"));
    gridBuilder(makeupSet, document.querySelector("#makeup"));
    gridBuilder(perfumes, document.querySelector("#perfumes"));
});

document.querySelector("#natural").addEventListener("click", function() {
    clearGrid("#skincare");
    gridBuilder(skincareNatural, document.querySelector("#skincare"));
});

document.querySelector("#regular").addEventListener("click", function() {
    clearGrid("#skincare");
    gridBuilder(skincareRegular, document.querySelector("#skincare"));
});

document.querySelector("#general").addEventListener("click", function() {
    clearGrid("#makeup");
    gridBuilder(makeupGeneral, document.querySelector("#makeup"));
});

document.querySelector("#giftset").addEventListener("click", function() {
    clearGrid("#makeup");
    gridBuilder(makeupSet, document.querySelector("#makeup"));
});

document.querySelector("#all-skincare").addEventListener("click", function() {
    clearGrid("#skincare");
    gridBuilder(skincareRegular, document.querySelector("#skincare"));
    gridBuilder(skincareNatural, document.querySelector("#skincare"));
});

document.querySelector("#all-makeup").addEventListener("click", function() {
    clearGrid("#makeup");
    gridBuilder(makeupGeneral, document.querySelector("#makeup"));
    gridBuilder(makeupSet, document.querySelector("#makeup"));
});
