const express = require('express');
const morgan = require('morgan');
require('../db/mongoose')
const userRouter = require('../routers/user')
const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
	console.log(`Server running at port ${port}`)
})