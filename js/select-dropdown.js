//dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".rs-product-price-dropdown a");
    const mainButton = document.querySelector(".rs-product-price-menu > ul > li > a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.textContent.trim() === "Price - Low to High" || this.textContent.trim() === "Price - High to Low") {
                mainButton.childNodes[0].nodeValue = this.textContent + " ";
            }
        });
    });
});