const thumbnails = document.querySelectorAll(".thumbnail");
const largeImages = document.querySelectorAll(".large-image");
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    largeImages.forEach((largeImage) => largeImage.classList.remove("show"));
    largeImages[index].classList.add("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".detai-product__quantity")
    .forEach(function (quantityDiv) {
      const minusButton = quantityDiv.querySelector(".minus");
      const plusButton = quantityDiv.querySelector(".plus");
      const quantityInput = quantityDiv.querySelector(".quantity-input");
      minusButton.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1;
          updateTotalPrice(quantityDiv.parentElement);
        }
      });
      plusButton.addEventListener("click", function () {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        updateTotalPrice(quantityDiv.parentElement);
      });

      function updateTotalPrice(productRow) {
        const unitPrice = parseFloat(
          productRow
            .querySelector("td:nth-child(4)")
            .textContent.replace("$", "")
        );
        const quantity = parseInt(quantityInput.value);
        const totalPrice = unitPrice * quantity;
        productRow.querySelector("td:nth-child(6)").textContent =
          "$" + totalPrice.toFixed(2);
      }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const textHeaders = document.querySelectorAll(".detai_product-descrip__text");
  const contentBoxes = document.querySelectorAll(
    ".detai_product-descrip__content"
  );

  textHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
      contentBoxes.forEach((box) => box.classList.remove("show"));
      textHeaders.forEach((h) => h.classList.remove("active"));
      contentBoxes[index].classList.add("show");
      header.classList.add("active");
    });
  });
});
