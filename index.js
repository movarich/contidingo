const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/temas', async (req, res) => {
    const tema = await prisma.tema.findMany()
    res.json({
        data: tema,
    })
})

app.post('/api/temas', async (req, res) => {
    const tema = await prisma.tema.create({
        data: {
            nombre: req.body.nombre,
        },
    })
    res.status(201).json({ data: tema })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
