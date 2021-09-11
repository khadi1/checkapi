const express = require("express")
const app = express()
const configDB = require("./config/configdb")
const users = require('./models/users')


require('dotenv').config({ path: './config/.env' })
configDB();


app.use(express.json())


app.post("/api/add", async (req, res) => {
    try {
        let newUser = new users({
            name, lastName, profession, age
        })

        newUser = await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
})


app.get("/api/usersList", async (req, res) => {
    try {
        let products = await Product.find()
        res.send(products)

    } catch (error) {
        res.status(500).send({ err: error.message })
    }
})

app.put('/api/edit/:userID ', (req, res) => {
    try {
        const userID = req.params.userID
        let editedUser = await users.findByIdAndUpdate(userID, req.body, { new: true })
        res.send(editedProduct)

    } catch (error) {
        res.status(500).send({ err: error.mmessage })
    }
})

app.delete('/api/delete/:userID', (req, res) => {
    try {
        const userID = req.params.userID
        let deleteduser = await users.findByIdAndDelete(userID)
        res.send(deleteduser)
    } catch (error) {
        res.status(500).send({ err: error.message })
    }
})







const port = 5012;
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`app is running on port ${port}`)

})