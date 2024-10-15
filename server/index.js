import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Priorities from './Schemata.js'

const PORT = process.env.PORT || 5000
const DB_URL = `mongodb://localhost:27017/TaskTracker`

const app = express()

app.use(cors())
app.use(express.json())

const setCacheControl = (req, res, next) => {    
    res.set('Cache-Control', 'public, max-age=300')
    next()
}

app.get('*', setCacheControl)

app.get('/', async (req, res) => {
    try {
        const priorities = await Priorities.findOne()
        res.json(priorities || {})
    } catch (error) {
        console.error('Ошибка при получении приоритетов:', error)
        res.status(500).json({ message: 'Внутренняя ошибка сервера' })
    }
})

app.put('/', async (req, res) => {
    try {
        const { life, health, career } = req.body
        const updatedPriorities = await Priorities.findOneAndUpdate({}, { life, health, career }, { new: true, upsert: true, setDefaultsOnInsert: true })
        
        res.set('Cache-Control', 'no-cache')
        res.json(updatedPriorities)
    } catch (error) {
        console.error('Ошибка при обновлении приоритетов:', error)
        res.status(500).json({ message: 'Внутренняя ошибка сервера' })
    }
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('Сервер запущен на порту ' + PORT)
        })
    } catch (error) {
        console.log('Ошибка при запуске приложения:', error)
    }
}

startApp()