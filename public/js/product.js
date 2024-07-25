const products = [
    {
        id: 1,
        title: "White T-Shirt - Cat",
        price: 630,
        sizes: ["S", "M", "L", "XL"],
        images: ["images/Shirt_1.png"],
        description: "A comfortable white t-shirt featuring a cute cat design.",
        sizingAndFit: "Fits large to size, take one size smaller"
    },
    {
        id: 2,
        title: "White T-Shirt - Illust",
        price: 630,
        sizes: ["28", "30", "32", "34"],
        images: ["images/Shirt_2.png"],
        description: "A comfortable white t-shirt featuring a beautiful illustration of a woman.",
        sizingAndFit: "Fits large to size, take one size smaller"
    },
    {
        id: 3,
        title: "Lion Of Cebu T-Shirt",
        price: 700,
        sizes: ["S", "M", "L", "XL"],
        images: ["images/Shirt_3.png"],
        description: "A comfortable white t-shirt featuring a cool illustration of a lion.",
        sizingAndFit: "Fits large to size, take one size smaller"
    },
    {
        id: 4,
        title: "Planet Over Profit T-Shirt",
        price: 700,
        sizes: ["28", "30", "32", "34"],
        images: ["images/Shirt_4.png"],
        description: "A comfortable white t-shirt featuring the visuals \"Planet Over Profit\".",
        sizingAndFit: "Fits large to size, take one size smaller"
    },
];

function getProductById(id) {
    return products.find(product => product.id === id);
}

function populateProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    const product = getProductById(productId);
    
    if (product) {
        document.title = `${product.title} | Gestourage`;
        document.getElementById('product-image').src = `/${product.images[0]}`;
        document.getElementById('product-image').alt = product.title;
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = `₱${product.price.toFixed(2)}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-sizeAndFit').textContent = product.sizingAndFit;
        
        const sizeSelect = document.getElementById('size');
        product.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
    } else {
        // Handle case when product is not found
        document.body.innerHTML = '<h1>Product not found</h1>';
    }
}

document.addEventListener('DOMContentLoaded', populateProductPage);
