var item = localStorage.getItem("Product");
console.log(item);
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
var i = Number(item);

var Product = document.querySelector(".product");

function makeProduct(){
    var item = myList[i];
    const image = document.createElement('div');
    image.className = "image";
    const slide = document.createElement('div');
    slide.className = "slide";
    const img = document.createElement("img");
    img.src = `${item.image}`;
    img.className = "image";
    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;
    const p = document.createElement('p');
    p.innerHTML = "Price: " + item.price;
    const des = document.createElement('p');
    des.innerHTML = item.description;
    Product.append(image);
    Product.append(slide);
    image.append(img);
    slide.append(h2);
    slide.append(p);
    slide.append(des);
}
makeProduct();