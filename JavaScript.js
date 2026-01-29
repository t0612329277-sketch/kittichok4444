function goProduct(
    name, model, price, material,
    size, weight, gem, warranty, care, image
) {
    const url =
        "product.html" +
        "?name=" + encodeURIComponent(name) +
        "&model=" + encodeURIComponent(model) +
        "&price=" + encodeURIComponent(price) +
        "&material=" + encodeURIComponent(material) +
        "&size=" + encodeURIComponent(size) +
        "&weight=" + encodeURIComponent(weight) +
        "&gem=" + encodeURIComponent(gem) +
        "&warranty=" + encodeURIComponent(warranty) +
        "&care=" + encodeURIComponent(care) +
        "&image=" + encodeURIComponent(image);

    window.location.href = url;
}
function updateCartCount(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.qty || 1;
    });

    const badge = document.getElementById("cartCount");
    if(badge){
        badge.innerText = total;
    }
}

function addToCart(product){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const found = cart.find(i => i.id === product.id);
    if(found){
        found.qty += 1;
    }else{
        cart.push({...product, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // ✅ ต้องมี
}



window.onload = updateCartCount;

// ===== ระบบสินค้า =====
if(!localStorage.getItem("products")){
    localStorage.setItem("products", JSON.stringify([
        {
            id:1,
            name:"Diamond Studs",
            price:3500,
            image:"https://images.unsplash.com/photo-1630019058244-4712054f2705",
        }
    ]));
}

function getProducts(){
    return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products){
    localStorage.setItem("products", JSON.stringify(products));
}
updateCartCount();
function updateCartCount(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    cart.forEach(item => {
        total += item.qty || 1;
    });

    const badge = document.getElementById("cartCount");
    console.log("cart =", cart);
    console.log("badge =", badge);

    if(badge){
        badge.innerText = total;
    }
}



