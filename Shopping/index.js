
/*const pricePrinzessin = document.getElementsByClassName("price")[0].textContent.replace(",", ".");
const pricePirat = document.getElementsByClassName("price")[1].textContent.replace(",", ".");
const priceJasmin = document.getElementsByClassName("price")[2].textContent.replace(",", ".");
const priceAddams = document.getElementsByClassName("price")[3].textContent.replace(",", ".");

const price= [parseFloat(pricePrinzessin), parseFloat(pricePirat),  parseFloat(priceJasmin), parseFloat(priceAddams)];*/


//Эта строка находит мне все элементы с классом прайс
let elemPrice = document.getElementsByClassName("price");
//это я задаю пустую переменную для общей суммы в корзине
let gesamteSumme=0;
// цикл, который считает общую сумму 
for(let i=0; i<elemPrice.length; i++){
    gesamteSumme = gesamteSumme + parseFloat(elemPrice[i].textContent.replace(",", "."));    
}
console.log(gesamteSumme);
// преобразование числа в строку и замена точки на запятую
document.getElementById('total-price').innerHTML = gesamteSumme.toString().replace(".",",");

// функция, которая считает сумму со скидкой
function getDiscount() {
let elemPrice = document.getElementsByClassName("price");
    let gesamteSumme=0;
    let price=[];
for(let i=0; i<elemPrice.length; i++){
    price[i] = parseFloat(elemPrice[i].textContent.replace(",", "."));
    price[i]= price[i]-price[i]*0.2;
    gesamteSumme = gesamteSumme + price[i]; 
}
console.log(gesamteSumme);
document.getElementById('total-price').innerHTML = gesamteSumme.toString().replace(".",",");
};
/*console.log(parseFloat(pricePrinzessin));*/


