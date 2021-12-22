function getCartItems() {
    //on snapshot is acting like a web socket and always listening
    //alternate option is to use .get.then, which would also do the same job but not in live, u would have to refresh the page
    //on snapshot is also on the common firebase documentation for actual connection to the live database
    db.collection("cart-items").onSnapshot((snapshot) => {
        let totalCount = 0;
        snapshot.forEach((doc) => {
            totalCount += doc.data().quantity;
        });
        setCartCounter(totalCount);
    })
}

function setCartCounter(totalCount) {
    document.querySelector(".cart-item-number").innerText = totalCount;
}

getCartItems();