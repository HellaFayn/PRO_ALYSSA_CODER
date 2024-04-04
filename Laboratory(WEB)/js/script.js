var subtotal1 = document.getElementById("subtotal1");
var subtotal2 = document.getElementById("subtotal2");
var subtotal3 = document.getElementById("subtotal3");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");


const quantity1 = document.getElementById("quantity1");
const quantity2 = document.getElementById("quantity2");
const quantity3 = document.getElementById("quantity3");

const total = document.getElementById("total");

var price;
var quantity;
var answer;

function onCreate(){
    price = parseInt(price1.innerHTML);
    quantity = parseInt(quantity1.value) ;
    answer = price * quantity;

    subtotal1.append(answer)

    price = parseInt(price2.innerHTML);
    quantity = parseInt(quantity2.value) ;
    answer = price * quantity;

    subtotal2.append(answer)

    price = parseInt(price3.innerHTML);
    quantity = parseInt(quantity3.value) ;
    answer = price * quantity;

    subtotal3.append(answer)

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.append(totalanswer)
}

function onPlusClick1(){
    quantity1.value++;
    price = parseInt(price1.innerHTML);
    quantity = parseInt(quantity1.value) ;
    answer = price * quantity;

    subtotal1.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onPlusClick2(){
    quantity2.value++;
    price = parseInt(price2.innerHTML);
    quantity = parseInt(quantity2.value) ;
    answer = price * quantity;

    subtotal2.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}
function onPlusClick3(){
    quantity3.value++;

    price = parseInt(price3.innerHTML);
    quantity = parseInt(quantity3.value) ;
    answer = price * quantity;

    subtotal3.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onMinusClick1(){
    if(parseInt(quantity1.value) != 0){
        quantity1.value--;
    }

    price = parseInt(price1.innerHTML);
    quantity = parseInt(quantity1.value) ;
    answer = price * quantity;

    subtotal1.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onMinusClick2(){
    if(parseInt(quantity2.value) != 0){
        quantity2.value--;
    }

    price = parseInt(price2.innerHTML);
    quantity = parseInt(quantity2.value) ;
    answer = price * quantity;

    subtotal2.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onMinusClick3(){
    if(parseInt(quantity3.value) != 0){
        quantity3.value--;
    }

    price = parseInt(price3.innerHTML);
    quantity = parseInt(quantity3.value) ;
    answer = price * quantity;

    subtotal3.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onType1(){
    var quantValue = parseInt(quantity1.value);
    if(quantity1.value < 0){
        quantity1.value = ""
    }

    price = parseInt(price1.innerHTML);
    quantity = parseInt(quantity1.value) ;
    answer = price * quantity;

    subtotal1.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onType2(){
    var quantValue = parseInt(quantity2.value);
    if(quantity2.value < 0){
        quantity2.value = ""
    }

    price = parseInt(price2.innerHTML);
    quantity = parseInt(quantity2.value) ;
    answer = price * quantity;

    subtotal2.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

function onType3(){
    var quantValue = parseInt(quantity3.value);
    if(quantity3.value < 0){
        quantity3.value = ""
    }
    
    price = parseInt(price3.innerHTML);
    quantity = parseInt(quantity3.value) ;
    answer = price * quantity;

    subtotal3.textContent = "P " + answer

    totalanswer = parseInt(subtotal1.innerHTML.substring(1)) + 
    parseInt(subtotal2.innerHTML.substring(1)) + 
    parseInt(subtotal3.innerHTML.substring(1))

    total.textContent = "P " + totalanswer
}

