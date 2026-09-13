const proName = document.getElementById("productName");
const proPrice = document.getElementById("productPrice");
const proCategory = document.getElementById("productCategory");
const proButton = document.getElementById("productButton");
const output = document.getElementById("output");

const products = [];


proButton.addEventListener("click", () => {

    // Get input values
    const productName = proName.value;
    const productPrice = proPrice.value;
    const productCategory = proCategory.value;


    // Create product object
    const product = {
        name: productName,
        price: productPrice,
        category: productCategory
    };


    // Store object in array
    products.push(product);


    // Clear previous output
    output.innerHTML = "";


    // Display all products
    products.forEach((product) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h2>Product Details</h2>
            <p>Product Name: ${product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Category: ${product.category}</p>
            <hr>
        `;

        output.appendChild(div);

    });


    // Clear inputs
    proName.value = "";
    proPrice.value = "";
    proCategory.value = "";

});
