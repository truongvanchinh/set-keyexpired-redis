import redis from 'redis'

const client = redis.createClient()
await client.connect()

export const addDelayEventOrder = async ({ orderId, delay }) => {
    return await client.set(orderId, "Cancel order", { EX: delay })
}