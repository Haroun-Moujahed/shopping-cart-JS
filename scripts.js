// getting the total
var total = document.getElementById("total");
console.log(total);

//////////////////////////// Plus buttons ///////////////////////////////////////
let plusBtns = document.getElementsByClassName("plus");
for (let btn of plusBtns) {
    btn.addEventListener("click", function () {
        // getting the value of the name attribute
        let ItemName = btn.getAttribute("name");
        // getting the price of the item
        let price = document.getElementById(ItemName + "_price").innerHTML;
        // getting the quantity of the item
        let qty = document.getElementById(ItemName + "_qty");

        // incrementing the quantity
        qty.innerHTML++;
        // changing the value of the total price
        total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
    });
}

////////////////////////// Minus buttons ////////////////////////////////////////
let minusBtns = document.getElementsByClassName("minus");
for (let btn of minusBtns) {
    btn.addEventListener("click", function () {
        // getting the value of the name attribute
        let ItemName = btn.getAttribute("name");
        // getting the price of the item
        let price = document.getElementById(ItemName + "_price").innerHTML;
        // getting the quantity of the item
        let qty = document.getElementById(ItemName + "_qty");

        // incrementing the quantity
        if (qty.innerHTML > 0) {
            qty.innerHTML--;
            // changing the value of the total price
            total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
        } else alert("be careful");
    });
}

////////////////////////// Delete buttons ////////////////////////////////////////
let deleteBtns = document.getElementsByClassName("delete");
for (let btn of deleteBtns) {
    btn.addEventListener("click", function () {
        // getting the value of the name attribute
        let ItemName = btn.getAttribute("name");
        // getting the price of the item
        let price = document.getElementById(ItemName + "_price").innerHTML;
        // getting the quantity of the item
        let qty = document.getElementById(ItemName + "_qty");

        //changing the total price
        total.innerHTML =
            parseInt(total.innerHTML) -
            parseInt(price) * parseInt(qty.innerHTML);

        //Removing the Item
        document.getElementById(ItemName).remove();
    });
}

///////////////////////// hearts buttons //////////////////////
var hearts = document.querySelectorAll(".heart");
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        console.log(heart.getAttribute("fill"));
        if (heart.getAttribute("fill") == "grey")
            heart.setAttribute("fill", "red");
        else heart.setAttribute("fill", "grey");
    });
}
