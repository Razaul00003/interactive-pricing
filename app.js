const values = ["10K", "50K", "100K", "500k", "1M"]; //values to step to
const prices = ["8.00", "12.00", "16.00", "24.00", "36.00"];
const discountPrices = ["72.00", "96.00", "144.00", "216.00", "300.00"];
var checked = false;

console.log("connnnnected file ");

$('input[type="checkbox"]').click(function () {
  if ($(this).prop("checked") == true) {
    $(".pricing__duration").text("/Yearly");
    checked = true;
    price.innerText = discountPrices[input.value - 1];
    console.log(checked);
  } else if ($(this).prop("checked") == false) {
    $(".pricing__duration").text("/Monthly");
    checked = false;
    price.innerText = prices[input.value - 1];
    console.log(checked);
  }
});

const input = document.getElementById("select-pageview");
const output = document.getElementById("pricing-pageview");
const price = document.getElementById("pricing-value");
const discount = document.getElementById("checkbox");

function updatePrice() {
  output.innerHTML = values[input.value - 1];
  if (checked == true) {
    price.innerText = discountPrices[input.value - 1];
  } else {
    price.innerText = prices[input.value - 1];
  }
}

updatePrice();
