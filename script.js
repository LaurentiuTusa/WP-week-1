const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


//Price range filter
    // Get all the product elements and store them in an array
    const allProducts = document.querySelectorAll(".individual-product");

    // Create a function to filter the products based on their prices
    function filterProductsByPrice(minPrice, maxPrice) {
        allProducts.forEach(product => {
            const productPrice = parseFloat(product.querySelector(".product-price").textContent);
            if (productPrice >= minPrice && productPrice <= maxPrice) {
                product.style.display = "inline-block"; // Show the product
            } else {
                product.style.display = "none"; // Hide the product
            }
        });
    }

    // Attach an event listener to the input range slider
    function updateFilteredProducts() {
        let minPrice = parseFloat(priceInput[0].value),
            maxPrice = parseFloat(priceInput[1].value);

        if (minPrice > maxPrice) {
            [minPrice, maxPrice] = [maxPrice, minPrice]; // Swap values if necessary
        }

        // Update the range slider based on the selected prices
        range.style.left = ((minPrice / priceInput[0].max) * 100) + "%";
        range.style.right = 100 - (maxPrice / priceInput[1].max) * 100 + "%";

        // Filter products based on the selected price range
        filterProductsByPrice(minPrice, maxPrice);
    }

    rangeInput.forEach(input => {
        input.addEventListener("input", updateFilteredProducts);
    });

    priceInput.forEach(input => {
        input.addEventListener("input", updateFilteredProducts);
    });

    // Initial display of products based on default range values
    updateFilteredProducts();