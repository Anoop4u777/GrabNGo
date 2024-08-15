import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order from the frontend.
const placeOrder = async(req, res) => {

    const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, {cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data: {
                currency: "cad",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_data:{
                currency: "cad",
                product_data: {
                    name: "Delivery charges"
                },
                unit_amount: 2*100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })

        res.json({success: true, session_url:session.url})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"});
    }
}

const verifyOrder = async (req, res) => {
    const {orderId, success} = req.body;
    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment:true});
            res.json({success:true, message: "Payment successful"});
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false, message: "Payment unsuccessful"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"});
    }
}

// Front end user order page functionality
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true, data: orders});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Unable to fetch order data"});
    }
}

// Getting orders for admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true, data: orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Unable to fetch order data"});
    }
}

// Api for updating order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
        res.json({success:true, message: "Status updated"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Unable update status"});
    }
}

const getOrdersPerMonth = async (req, res) => {
    try {
        const ordersPerMonth = await orderModel.aggregate([
            {
                $group: {
                    _id: { month: { $month: "$date" }, year: { $year: "$date" } },
                    orderCount: { $sum: 1 }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]);

        const formattedData = ordersPerMonth.map(item => ({
            month: `${item._id.year}-${item._id.month < 10 ? '0' + item._id.month : item._id.month}`,
            orderCount: item.orderCount
        }));

        res.json({ success: true, data: formattedData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Unable to fetch orders per month" });
    }
}

const getAmountPerMonth = async (req, res) => {
    try {
        const amountPerMonth = await orderModel.aggregate([
            {
                $group: {
                    _id: { month: { $month: "$date" }, year: { $year: "$date" } },
                    totalAmount: { $sum: "$amount" }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]);

        const formattedData = amountPerMonth.map(item => ({
            month: `${item._id.year}-${item._id.month < 10 ? '0' + item._id.month : item._id.month}`,
            totalAmount: item.totalAmount
        }));

        res.json({ success: true, data: formattedData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Unable to fetch amount per month" });
    }
};

const getAverageOrderValue = async (req, res) => {
    try {
      const aovData = await orderModel.aggregate([
        {
          $group: {
            _id: { month: { $month: "$date" }, year: { $year: "$date" } },
            totalAmount: { $sum: "$amount" },
            orderCount: { $sum: 1 },
          },
        },
        {
          $project: {
            month: { $concat: [{ $toString: "$_id.year" }, "-", { $toString: "$_id.month" }] },
            averageOrderValue: { $divide: ["$totalAmount", "$orderCount"] },
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } },
      ]);
  
      res.json({ success: true, data: aovData });
    } catch (error) {
      console.error('Error calculating AOV:', error);
      res.status(500).json({ success: false, message: 'Failed to calculate AOV' });
    }
  };

const orderByStatus = async (req, res) => {
    try {
      const ordersByStatus = await orderModel.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            status: "$_id",
            count: 1,
            _id: 0
          }
        }
      ]);
  
      res.json({ success: true, data: ordersByStatus });
    } catch (error) {
      console.error('Error fetching orders by status:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch orders by status' });
    }
  };

export {placeOrder, verifyOrder, userOrders, listOrders, updateStatus,
    getOrdersPerMonth, getAmountPerMonth, getAverageOrderValue, orderByStatus};