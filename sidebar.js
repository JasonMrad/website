function updateNoFavoritesMessage() {
    const noFavoritesMessage = document.getElementById('no-favorites-message');

    if (document.getElementsByClassName("product-favorite-card").length === 0) {
        noFavoritesMessage.style.display = 'flex'; // Show message if no favorites
    } else {
        noFavoritesMessage.style.display = 'none'; // Hide message if there are favorites
    }
}

// Function to handle toggling product in favorites
function toggleFavorite(productElement) {
    const favoritesContainer = document.getElementById('favorites-container');
    const img = productElement.querySelector('img');

    if (!img) {
        console.error('Image element not found in productElement');
        return;
    }

    const productImgSrc = img.getAttribute('src');

    // Check if the product is already in the favorites container
    const favoriteProduct = Array.from(favoritesContainer.children).find(child =>
        child.querySelector('img') && child.querySelector('img').getAttribute('src') === productImgSrc
    );

    if (favoriteProduct) {
        // If the product is already in favorites, remove it
        removeFavorite(favoriteProduct);
    } else {
        // Otherwise, add it to favorites
        addToFavorites(productElement);
    }

    // Update the no favorites message visibility
    updateNoFavoritesMessage();
}

// Function to handle adding product to favorites
function addToFavorites(productElement) {
    const prod = productElement.querySelector('button');
    if (prod) {
        prod.style.color = "black";
    } else {
        console.error('Button element not found in productElement');
    }

    // Clone the product element
    const favoriteProduct = productElement.cloneNode(true);
    
    // Update the class name
    favoriteProduct.classList.remove('product-card');
    favoriteProduct.classList.add('product-favorite-card');
    
    // Get the image and description elements
    const img = favoriteProduct.querySelector('img');
    img.style.maxHeight = '200px';
    img.style.maxWidth = '200px';

    const desc = favoriteProduct.querySelector('.product-info');
    desc.style.maxHeight = '200px';
    desc.style.maxWidth = '200px';

    // Remove the favorite button
    const button = favoriteProduct.querySelector('.favorite-btn');
    if (button) {
        button.remove(); // This removes the favorite button from the cloned element
    }
const cartBut=favoriteProduct.querySelector(".add-to-cart-div");
cartBut.remove();
    // Create a new div with class 'product-desc'
    const productDesc = document.createElement('div');
    productDesc.classList.add('product-desc');

    // Create a new div to replace the favorite button
    const removeBtnDiv = document.createElement('div');
    removeBtnDiv.classList.add('remove-btn-div');

    // Create the trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Add the trash icon

    // Append the trash button to the new div
    removeBtnDiv.appendChild(trashButton);

    // Append the img and desc to the product-desc div
    productDesc.appendChild(desc);
    productDesc.appendChild(removeBtnDiv);

    favoriteProduct.appendChild(img);
    favoriteProduct.appendChild(productDesc);

    // Append the favorite product to the favorites container
    document.getElementById('favorites-container').appendChild(favoriteProduct);
    
    // Add event listener to the trash button
    trashButton.addEventListener('click', function() {
        removeFavorite(favoriteProduct);
    });
}

// Function to handle removing product from favorites
function removeFavorite(favoriteProduct) {
    const imgSrc = favoriteProduct.querySelector('img') ? favoriteProduct.querySelector('img').getAttribute('src') : '';
    const originalProduct = imgSrc ? document.querySelector(`.product-card img[src="${imgSrc}"]`).closest('.product-card') : null;

    if (originalProduct) {
        const heartButton = originalProduct.querySelector('.favorite-btn');
        if (heartButton) {
            heartButton.style.color = 'white'; // Reset color to white
        }
    }

    // Remove the product from the favorites container
    favoriteProduct.remove();

    // Update the no favorites message visibility
    updateNoFavoritesMessage();
}

// Event listener for toggling products in favorites
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.product-card');
        toggleFavorite(productElement);
    });
});
function checked(){
    console.log("hello");
  let page=document.getElementById("darkOverlay");
    let checkbox=document.getElementById("menu1Toggle");
    let body=document.body;
    let main=document.getElementById("div-main");
    let opt=document.getElementById("options");
    let membership=document.getElementsByClassName("membership");
    checkbox.checked=true;
    page.style.visibility="visible";
    body.style.overflowY="hidden";
    main.style.overflowY="hidden";
    main.style.pointerEvents="none";
    opt.style.pointerEvents="none";
    membership[0].style.pointerEvents="none";

  }
  function uncheck(){
  let page=document.getElementById("darkOverlay");
  let body=document.body;
  let main=document.getElementById("div-main");
  let opt=document.getElementById("options");
  let membership=document.getElementsByClassName("membership");
  body.style.overflowY="scroll";
  page.style.visibility="hidden";
  main.style.overflowY="visible";
  main.style.pointerEvents="all";
  opt.style.pointerEvents="all";
  membership[0].style.pointerEvents="all";

  }
