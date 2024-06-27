const express = require("express");
const Payment = require('../Models/Payment.js');
const stripe = require("stripe")("sk_test_51PH7DW07mOlkGGNsb1VuSNhTEBZzUEhnOiS4KRgkafrKGyELY6wbZgNMy3xHWI9qGoteIkNuQpLbgGYpFe8P5obo00sbjjqWXy");
const fetchUser = require("../middleWare/fetchUser.js");

const router = express.Router();






//creATING API geting all products kk
router.get('/allpayment',async(req,res)=>{
    let payment = await Payment.find({});
    console.log("Allp payments fetched")
    res.send(payment);
})






function calculateTotalAmount(products) {
    return products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}

router.post('/createcheckout', fetchUser, async (req, res) => {
    const { product, userEmail } = req.body;

    const lineItems = product.map((item) => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: item.name,
                images: [item.image],
            },
            unit_amount: item.price * 100,
        },
        quantity: item.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        const totalAmount = calculateTotalAmount(product);

        const payment = new Payment({
            userEmail:userEmail,
            amount: totalAmount,
        });
        await payment.save();

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: 'Failed to create checkout session' });
    }
});

module.exports = router;




// const express = require("express");
// const path = require("path");
// const Users = require('../Models/Users.js');
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const port = 4002;
// const stripe = require("stripe")("sk_test_51PH7DW07mOlkGGNsb1VuSNhTEBZzUEhnOiS4KRgkafrKGyELY6wbZgNMy3xHWI9qGoteIkNuQpLbgGYpFe8P5obo00sbjjqWXy")

// let router = express.Router();
// const fetchUser = require("../middleWare/fetchUser.js");

// router.post("/createcheckout", fetchUser, async (req, res) => {
//     const { product } = req.body;

//     const lineItems = product.map((item) => ({
//         price_data: {
//             currency: "inr",
//             product_data: {
//                 name: item.name,
//                 images: [item.image]
//             },
//             unit_amount: item.price * 100,
//         },
//         quantity: item.quantity,
//     }));

//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: lineItems,
//             mode: "payment",
//             success_url: "http://localhost:3000/success",
//             cancel_url: "http://localhost:3000/cancel",
//         });

//         res.json({ id: session.id });
//     } catch (error) {
//         res.status(500).send({ error: "Failed to create checkout session" });
//     }
// });




// module.exports = router;
// // module.exports = router;
// routes/paymentRoutes.js
