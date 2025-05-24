import express from 'express'
import { addDelayEventOrder } from './services/order.service.js'

const app = express()

app.use(express.json())

app.post('/order', async (req, res, next) => {
    try {
        const { userId, order } = req.body
        console.log(order);
        
        await addDelayEventOrder({orderId: order.id, delay:5})

        return res.status(200).json({
            status: 'success',
            msg: order
        })
    } catch (error) {
        console.log("Error", error);
        return res.status(401).json(error)
    }
})

app.listen(3000, () => {
    console.log('Server is running at port 3000');
})