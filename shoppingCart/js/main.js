
function addToShoppingCart(productId){
    //Show shopping cart
    document.getElementById('displayCart').style.display='block';

    //Add selected items to shopping cart
    var node = document.createElement("LI");
    var inputValue = document.getElementById(productId).textContent;
    var textnode = document.createTextNode(inputValue);
    node.appendChild(textnode);
    document.getElementById("cartItems").appendChild(node);
}