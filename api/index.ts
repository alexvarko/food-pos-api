const express = require("express");
const app = express();
const faker = require('faker');

const IPFS_URL = "https://cloudflare-ipfs.com/ipfs/QmZL2h7ZyvooMbAzPAPEvi1N3uSV2k7dWcCVopRZtj6AJp"

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/dishes", (req, res) => res.json({
    "data": [
        { "id": 1, "name": "Spicy seasoned seafood noodles", "price": 2.29, "available": 20, "image": IPFS_URL+"/dishes/1.png" },
        { "id": 2, "name": "Salted Pasta with mushroom sauce", "price": 2.69, "available": 16, "image": IPFS_URL+"/dishes/2.png" },
        { "id": 3, "name": "Beef dumpling in hot and sour soup", "price": 2.99, "available": 22, "image": IPFS_URL+"/dishes/3.png" },
        { "id": 4, "name": "Healthy noodle with spinach leaf", "price": 3.29, "available": 13, "image": IPFS_URL+"/dishes/4.png" },
        { "id": 5, "name": "Hot spicy fried rice with omelet", "price": 3.49, "available": 17, "image": IPFS_URL+"/dishes/5.png" },
        { "id": 6, "name": "Spicy instant noodle with special omelette", "price": 3.59, "available": 17, "image": IPFS_URL+"/dishes/6.png" },
        { "id": 7, "name": "Healthy noodle with spinach leaf", "price": 3.49, "available": 13, "image": IPFS_URL+"/dishes/7.png" },
        { "id": 8, "name": "Hot spicy fried rice with omelet", "price": 3.29, "available": 17, "image": IPFS_URL+"/dishes/8.png" },
        { "id": 9, "name": "Spicy instant noodle with special omelette", "price": 3.59, "available": 17, "image": IPFS_URL+"/dishes/9.png" }
    ]
}));

app.get("/total_revenue", (req, res) => res.json({
    "name": "revenue",
    "percentage": faker.random.number({ min: -55, max: 70, precision: 0.01 }),
    "amount": faker.random.number({ min: 6000, max: 12000, precision: 0.01 })
}))

app.get("/total_ordered", (req, res) => res.json({
    "name": "ordered",
    "percentage": faker.random.number({ min: -30, max: 50, precision: 0.01 }),
    "amount": faker.random.number({ min: 15000, max: 30000 })
}))

app.get("/total_customers", (req, res) => res.json({
    "name": "customers",
    "percentage": faker.random.number({ min: -15, max: 30, precision: 0.01 }),
    "amount": faker.random.number({ min: 1000, max: 3000 })
}))


app.get("/order_report", (req, res) => res.json([
    { "id": 1, "customer": "Eren Jaegar", "menu": "Spicy seasoned seafood noodles", "total_payment": 125, "status": "Completed", "image": IPFS_URL+"/order-report/avatar-1.png" },
    { "id": 2, "customer": "Reiner Braunn", "menu": "Salted Pasta with mushroom sauce", "total_payment": 145, "status": "Preparing", "image": IPFS_URL+"/order-report/avatar-2.png" },
    { "id": 3, "customer": "Levi Ackerman", "menu": "Beef dumpling in hot and sour soup", "total_payment": 105, "status": "Pending", "image": IPFS_URL+"/order-report/avatar-3.png" },
    { "id": 4, "customer": "Historia Reiss", "menu": "Hot spicy fried rice with omelet", "total_payment": 45, "status": "Completed", "image": IPFS_URL+"/order-report/avatar-4.png" },
    { "id": 5, "customer": "Hanji Zoe", "menu": "Hot spicy fried rice with omelet", "total_payment": 245, "status": "Completed", "image": IPFS_URL+"/order-report/avatar-5.png" },
    { "id": 6, "customer": "Armin Arlert", "menu": "Hot spicy fried rice with omelet", "total_payment": 435, "status": "Completed", "image": IPFS_URL+"/order-report/avatar-6.png" }
]))


app.get("/most_ordered", (req, res) => res.json([
    { "id": 1, "name": "Spicy seasoned seafood noodles", "ordered": 200, "image": IPFS_URL+"/dishes/1" },
    { "id": 2, "name": "Salted Pasta with mushroom sauce", "ordered": 120, "image": IPFS_URL+"/dishes/2" },
    { "id": 3, "name": "Beef dumpling in hot and sour soup", "ordered": 80, "image": IPFS_URL+"/dishes/3" }
]))





app.listen(4000, () => console.log("Server ready on port 4000."));

module.exports = app;