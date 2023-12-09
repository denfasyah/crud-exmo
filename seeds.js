const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1/ecommerce_db').then((result) => {
    console.log('connected')
}).catch((err) => {
    console.error(err)
});


const seedProducts = 
    [
        {
            "name": "Kemeja Flanel",
            "brand": "Hollister",
            "price": 750000,
            "color": "biru muda",
            "category": "Baju",
            
        },
        {
            "name": "Celana Chino",
            "brand": "Levi's",
            "price": 900000,
            "color": "krem",
            "category": "Celana",
           
        },
        {
            "name": "Sweater",
            "brand": "Gap",
            "price": 650000,
            "color": "merah muda",
            "category": "Jaket",
            
        },
        
        
       
        {
            "name": "Baju Renang",
            "brand": "Speedo",
            "price": 500000,
            "color": "biru tua",
            "category": "Baju",
            
        },
        {
            "name": "Topi Baseball",
            "brand": "New Era",
            "price": 350000,
            "color": "hitam",
            "category": "Aksesoris",
            
        },
        {
            "name": "Rompi",
            "brand": "Zara",
            "price": 850000,
            "color": "abu-abu",
            "size":  "Baju",
            
        },
        {
            "name": "Jas",
            "brand": "Hugo Boss",
            "price": 4500000,
            "color": "hitam",
            "category": "Jaket",
            
        },
        
    ];

Product.insertMany(seedProducts).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
