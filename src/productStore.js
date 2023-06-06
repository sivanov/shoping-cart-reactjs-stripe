const productsArray = [
    {
        id: '1',
        title: 'TV',
        price: 300
    },
    {
        id: '2',
        title: 'coffee',
        price: 6
    },
    {
        id: '3',
        title: 'Phone',
        price: 150
    },{
        id: '4',
        title: 'coffee',
        price: 8
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id) 

    if (productData === undefined) {
        console.log('cant find product with this ID: ', id)
    }

    return productData
}

export { productsArray, getProductData } 