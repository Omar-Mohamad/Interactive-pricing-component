const views = document.querySelector("#views"),
  price = document.querySelector(".price"),
  priceRange = document.querySelector(".price-range"),
  discountSwitch = document.querySelector(".discount-switch");

views.textContent = "100k";
price.textContent = `$${(16).toFixed(2)}`;

const updatePrice = (price) => `$${(price - price * 0.25).toFixed(2)}`;

priceRange.addEventListener("change", () => {
  if (priceRange.value === "1") {
    views.textContent = "10k";
    price.textContent = `$${(8).toFixed(2)}`;
  } else if (priceRange.value === "2") {
    views.textContent = "50k";
    price.textContent = `$${(12).toFixed(2)}`;
  } else if (priceRange.value === "3") {
    views.textContent = "100k";
    price.textContent = `$${(16).toFixed(2)}`;
  } else if (priceRange.value === "4") {
    views.textContent = "500k";
    price.textContent = `$${(24).toFixed(2)}`;
  } else if (priceRange.value === "5") {
    views.textContent = "1M";
    price.textContent = `$${(36).toFixed(2)}`;
  }
});

discountSwitch.addEventListener("change", () => {
  if (discountSwitch.checked && priceRange.value === "1") {
    price.textContent = updatePrice(8);
  } else if (!discountSwitch.checked && priceRange.value === "1") {
    price.textContent = `$${(8).toFixed(2)}`;
  } else if (discountSwitch.checked && priceRange.value === "2") {
    price.textContent = updatePrice(12);
  } else if (!discountSwitch.checked && priceRange.value === "2") {
    price.textContent = `$${(12).toFixed(2)}`;
  } else if (discountSwitch.checked && priceRange.value === "3") {
    price.textContent = updatePrice(16);
  } else if (!discountSwitch.checked && priceRange.value === "3") {
    price.textContent = `$${(16).toFixed(2)}`;
  } else if (discountSwitch.checked && priceRange.value === "4") {
    price.textContent = updatePrice(24);
  } else if (!discountSwitch.checked && priceRange.value === "4") {
    price.textContent = `$${(24).toFixed(2)}`;
  } else if (discountSwitch.checked && priceRange.value === "5") {
    price.textContent = updatePrice(36);
  } else if (!discountSwitch.checked && priceRange.value === "5") {
    price.textContent = `$${(36).toFixed(2)}`;
  }
});

// range input

const rangeInputs = document.querySelectorAll('input[type="range"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});
