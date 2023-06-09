const productsArray = [
    {
        id: 'price_1NGmKnLi9CvIgB80tQNYcycw', // stripe product is for TV
        title: 'TV',
        price: 300
    },{
        id: 'price_1NGmNiLi9CvIgB80T8t6IiIM', // stripe product is for TV
        title: 'Phone',
        price: 150
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id) 

    if (productData === undefined) {
        console.log('cant find product with this ID: ', id)
    }

    return productData
}

export { productsArray, getProductData } 