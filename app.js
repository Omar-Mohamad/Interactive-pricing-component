const views = document.querySelector("#views"),
  price = document.querySelector(".price"),
  priceRange = document.querySelector(".price-range"),
  discountSwitch = document.querySelector(".discount-switch");

views.textContent = "100k";
price.textContent = `$${(16).toFixed(2)}`;

const updatePrice = (price) => `$${(price - price * 0.25).toFixed(2)}`;

priceRange.addEventListener("change", () => {
  switch (priceRange.value) {
    case "1":
      views.textContent = "10k";
      price.textContent = `$${(8).toFixed(2)}`;

      break;
    case "2":
      views.textContent = "50k";
      price.textContent = `$${(12).toFixed(2)}`;

      break;
    case "3":
      views.textContent = "100k";
      price.textContent = `$${(16).toFixed(2)}`;

      break;
    case "4":
      views.textContent = "500k";
      price.textContent = `$${(24).toFixed(2)}`;

      break;
    case "5":
      views.textContent = "1M";
      price.textContent = `$${(36).toFixed(2)}`;

      break;
  }
});

discountSwitch.addEventListener("change", () => {
  switch (discountSwitch && priceRange.value) {
    case discountSwitch.checked && "1":
      price.textContent = updatePrice(8);

      break;
    case !discountSwitch.checked && "1":
      price.textContent = `$${(8).toFixed(2)}`;

      break;
    case discountSwitch.checked && "2":
      price.textContent = updatePrice(12);

      break;
    case !discountSwitch.checked && "2":
      price.textContent = `$${(12).toFixed(2)}`;

      break;
    case discountSwitch.checked && "3":
      price.textContent = updatePrice(16);

      break;
    case !discountSwitch.checked && "3":
      price.textContent = `$${(16).toFixed(2)}`;

      break;
    case discountSwitch.checked && "4":
      price.textContent = updatePrice(24);

      break;
    case !discountSwitch.checked && "4":
      price.textContent = `$${(24).toFixed(2)}`;

      break;
    case discountSwitch.checked && "5":
      price.textContent = updatePrice(36);

      break;
    case !discountSwitch.checked && "5":
      price.textContent = `$${(36).toFixed(2)}`;

      break;
  }
});

// changing the size of the background color of range input dynamicly

priceRange.addEventListener("input", (e) => {
  const target = e.target,
    min = target.min,
    max = target.max,
    val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
});
