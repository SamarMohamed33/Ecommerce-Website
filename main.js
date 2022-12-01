let loadBtn = document.getElementById("load-more");
let items = document.getElementsByClassName("item");

if (items.length > 12) {
  for (let i = 0; i < 12; i++) {
    items[i].style.display = "block";
  }
} else {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "block";
  }
}

loadBtn.onclick = function () {
  let counter = 0;
  forDisplaying = [];
  for (let i = 0; i < items.length; i++) {
    if (window.getComputedStyle(items[i]).display === "none") {
      {
        forDisplaying.push(items[i]);
        counter++;
      }
    }
  }

  if (counter > 12) {
    for (let i = 0; i < 12; i++) {
      forDisplaying[i].style.display = "block";
    }
  } else {
    let start = forDisplaying.length - counter;
    for (let i = start; i < forDisplaying.length; i++) {
      forDisplaying[i].style.display = "block";
    }
  }
};

let typefilter = document.getElementsByName("type");
let priceFilter = document.getElementsByName("price");

document.getElementById("filter").onchange = function () {
  let checkedTypeFilters = [];
  for (i = 0; i < typefilter.length; i++) {
    if (typefilter[i].checked) {
      checkedTypeFilters.push(typefilter[i].value);
    }
  }
  let checkedPriceFilters = [];
  for (i = 0; i < priceFilter.length; i++) {
    if (priceFilter[i].checked) {
      checkedPriceFilters.push(priceFilter[i].id);
    }
  }

  if (checkedTypeFilters.length !== 0 && checkedPriceFilters.length !== 0) {
    let items1 = filterTypes(checkedTypeFilters);
    let items2 = priceFilterfun(checkedPriceFilters);
    console.log(items1);
    console.log(items2);
    for (let i = 0; i < items.length; i++) {
      if (items1.includes(items[i]) && items2.includes(items[i])) {
        items[i].style.display = "block";
        console.log("block");
      } else {
        items[i].style.display = "none";
        console.log("none");
      }
    }
    loadBtn.style.display = "none";
  } else if (
    checkedPriceFilters.length !== 0 &&
    checkedTypeFilters.length === 0
  ) {
    let items1 = priceFilterfun(checkedPriceFilters);
    for (let i = 0; i < items.length; i++) {
      if (items1.includes(items[i])) {
        items[i].style.display = "block";
        console.log("block");
      } else {
        items[i].style.display = "none";
        console.log("none");
      }
    }
    loadBtn.style.display = "none";
  } else if (
    checkedTypeFilters.length !== 0 &&
    checkedPriceFilters.length === 0
  ) {
    let items1 = filterTypes(checkedTypeFilters);
    for (let i = 0; i < items.length; i++) {
      if (items1.includes(items[i])) {
        items[i].style.display = "block";
        console.log("block");
      } else {
        items[i].style.display = "none";
        console.log("none");
      }
    }
    loadBtn.style.display = "none";
  } else {
    loadBtn.style.display = "block";
  }
};

function filterTypes(value) {
  let toDisplay = [];
  for (let i = 0; i < items.length; i++) {
    let ok = false;
    for (let j = 0; j < value.length; j++) {
      if (items[i].classList[1] === value[j]) {
        toDisplay.push(items[i]);
      }
    }
  }
  //sconsole.log(toDisplay);
  return toDisplay;
}

function priceFilterfun(value) {
  let toDisplay = [];
  for (let i = 0; i < items.length; i++) {
    let price = items[i]
      .querySelector("p")
      .textContent.split("")
      .map(function (ele) {
        return isNaN(parseInt(ele)) ? "" : ele;
      })
      .join("");
    for (let j = 0; j < value.length; j++) {
      if (value[j] === "cheap") {
        if (price < 1000 && price > 500) {
          toDisplay.push(items[i]);
        }
      }
      if (value[j] === "average-price") {
        if (price > 1000 && price < 1500) {
          toDisplay.push(items[i]);
        }
      }
      if (value[j] === "expensive") {
        if (price > 1500) {
          toDisplay.push(items[i]);
        }
      }
    }
  }
  // console.log(toDisplay);
  return toDisplay;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
}
function openFilter() {
  document.getElementById("filter").style.width = "70%";
}
function closeFilter() {
  document.getElementById("filter").style.width = "0";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
