require("dotenv").config();
const express = require("express")
const db = require("./models")
const app = express()

app.use(express.json())
app.use("/user", require('./routes/user.routes'))
app.use("/profile", require('./routes/profile.routes'))
app.use("/profiles", require('./routes/profiles.routes'))

const PORT = process.env.PORT || 3000
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`)
    })
})
