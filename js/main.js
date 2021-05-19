/*** PRODUCT DATA ***/

const products = [
{
    name:  `Deluxe Brush Kit`,
    code: `shoeBrushKit`,
    bgcolor: `dark`,
    id: `001`,
    info:  `Cedar Valet 10pc Set`,
    price: `46`,
    quantity: `10`,
    category:  `kit`,
    img: `img/shoebrushkit.png`,
}, {
    name: `Shoe Brush`,
    code: `shoeBrush`,
    bgcolor: `light`,
    id: `002`,
    info: `Constructed of 100% horsehair!`,
    price: `17`,
    quantity: `10`,
    category: `tool`,
    img: `img/shoe-brush.png`,
}, {
    name: `Cleaner with Brush`,
    code: `cleaner`,
    bgcolor: `light`,
    id: `003`,
    info: `Cleans Canvas, Leather, Nylon & Vinyl!`,
    price: `8`,
    quantity: `10`,
    category: `cleansing`,
    img: `img/cleaner.jpg`,
}, {
    name: `Walrus Oil`,
    code:  `walrusOil`,
    bgcolor: `dark`,
    id: `004`,
    info: `All Natural Leather Wax for Waterproofing!`,
    price: `16`,
    quantity: `10`,
    category:  `protective`,
    img: `img/walrus-oil.png`,
}, {
    name: `Protective Cure Kit`,
    code: `cureProKit`,
    bgcolor: `dark`,
    id: `005`,
    info: `Clean your shoes and keep them clean!`,
    price: `30`,
    quantity: `10`,
    category: `kit`,
    img: `img/cure-pro-kit.png`,
}, {
    name: `Shoe Care Valet`,
    code: `shoeCareValet`,
    bgcolor: `light`,
    id: `006`,
    info: `Brushes, Cloths, Polish and more!`,
    price: `121`,
    quantity: `10`,
    category: `kit`,
    img: `img/shoe-care-valet.png`,
}, {
    name: `Professional Paste Polish`,
    code: `proPastePolish`,
    bgcolor: `light`,
    id: `007`,
    info: `High Quality Shoe Polish, Made in Germany!`,
    price: `9`,
    quantity: `10`,
    category: `protective`,
    img: `img/pro-paste-polish.png`,
}, {
    name: `Sneaker Repellent`,
    code: `jason-repel`,
    bgcolor: `dark`,
    id: `008`,
    info: `Premium Stain and Water Repellent!`,
    price: `12`,
    quantity: `10`,
    category: `protective`,
    img: `img/jasonmark-repel.png`,
}, {
    name: `Ultimate Scuff Eraser`,
    code: `scuffEraser`,
    bgcolor: `dark`,
    id: `009`,
    info: `Erase Scuffs from Suege & Nubuck!`,
    price: `9`,
    quantity: `10`,
    category: `protective`,
    img: `img/scuffEraser.png`,
}, {
    name: `Horse Hair Shoe Brush`,
    code: `horseHairBrush`,
    bgcolor: `light`,
    id: `010`,
    info: `Polish faster and with less effort!`,
    price: `11`,
    quantity: `10`,
    category: `protective`,
    img: `img/horseHairBrush.png`,
}
];

const firstFiveProd = products.slice(0, 5);

/*** FUNCTIONS ***/

function getProductsAsStringHTML(product) {

    return `<article class="product ${product.bgcolor} ${product.code}" id="${product.code}">
    <h2 class="product-name">${product.name}</h2>
    <p class="product-info">${product.info}</p>
    <p class="product-price">${product.price}</p>
    <button class="add-cart-btn">Add to Cart</button>
    </article>
    `
}

function renderProducts(arr) {
    const arrOfHtml = arr.map(getProductsAsStringHTML);

    const strOfHtml = arrOfHtml.join('\n');

    document.getElementById('products').innerHTML = strOfHtml;

    var productCount = arr.length;
    document.getElementById('products-found').innerHTML = `1-${productCount} of 20 Products Found`;
}

function arrangeProducts() {
    document.getElementById('products').classList.toggle('grid-view')
  }

function categoryFilter(product) {
    return product.category == this;
}

function categorySearch(event) {
    const searchTerm = event.target.value; 
    const arrCatCheck = products.filter(categoryFilter, searchTerm)
    renderProducts(arrCatCheck);
}
  
renderProducts(firstFiveProd);



document.getElementById('searchCat').addEventListener('change', categorySearch)

document.getElementById('layout').addEventListener('click', event => arrangeProducts())

document.getElementById('showAllProd').addEventListener('click', event => renderProducts(products))