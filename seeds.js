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
            "size": "M",
            
        },
        {
            "name": "Celana Chino",
            "brand": "Levi's",
            "price": 900000,
            "color": "krem",
            "size": "L",
           
        },
        {
            "name": "Sweater",
            "brand": "Gap",
            "price": 650000,
            "color": "merah muda",
            "size": "S",
            
        },
        
        
       
        {
            "name": "Baju Renang",
            "brand": "Speedo",
            "price": 500000,
            "color": "biru tua",
            "size": "XL",
            
        },
        {
            "name": "Topi Baseball",
            "brand": "New Era",
            "price": 350000,
            "color": "hitam",
            "size": "S",
            
        },
        {
            "name": "Rompi",
            "brand": "Zara",
            "price": 850000,
            "color": "abu-abu",
            "size":  "L",
            
        },
        {
            "name": "Jas",
            "brand": "Hugo Boss",
            "price": 4500000,
            "color": "hitam",
            "size": "S",
            
        },
        
    ];

Product.insertMany(seedProducts).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
