import redis from 'redis'
import express from 'express'

const app = express()

const start = async () => {
    const subscribe = redis.createClient()
    await subscribe.connect()
    
    await subscribe.pSubscribe('__keyevent@0__:expired', (message, channel) => {
        console.log(`channel :::: `, channel)
        console.log(`message :::: `, message)
        ///Update trong db là orderID là chưa thanh toán
    })

    app.listen(3001, () => {
        console.log('Event Listener is running at port 3001');
    })
}

start()

