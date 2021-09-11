let price;
let a = prompt("Введите страну");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    price = 200;
    price = hot ? price - 0.2 * price : price;
    break;
  case "Греция":
    price = 300;
    price = hot ? price - 0.25 * price : price;
    break;
  case "Дубай":
    price = 750;
    price = hot ? price - 0.3 * price : price;
    break;
  case "Африка":
    price = 180;
    price = hot ? price - 0.2 * price : price;
    break;

  default:
    price = "У нас нету такого тура";
}
alert(price);
