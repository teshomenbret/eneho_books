import express from 'express'
// import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import bookRoutes from './routes/book.routes.js'
import orderRoutes from './routes/order.routes.js'
import paymentRoutes from './routes/payment.routes.js'
import categoryRoutes from './routes/category.routes.js'
import cityRoutes from './routes/city.routes.js'
import yenepayRoutes from './routes/yenepay.routes.js'
import requestRoutes from './routes/request.routes.js'
import eventRoutes from './routes/event.routes.js'
// import path from 'path'

const app = express()
// const CURRENT_WORKING_DIR = process.cwd()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', bookRoutes)
app.use('/', categoryRoutes)
app.use('/', cityRoutes)
app.use('/', orderRoutes)
app.use('/', paymentRoutes)
app.use('/', yenepayRoutes)
app.use('/', requestRoutes)
app.use('/', eventRoutes)

// after we complate or may be on thw way we will handel
// a static file
// and this route send the static file
// this may be usd of react server rendaering pupose.
app.get('/', (req, res) => {
  res.send(`
  <form method="post" action="/api/books" enctype="multipart/form-data">
  <p>Title: <input type="text" name="name" /></p>
  <p>File: <input type="file" name="photo" /></p>
  <p><input type="submit"/></p>
</form>
  `);
});

// app.use('/static', express.static(path.join(CURRENT_WORKING_DIR,'static')))
   
export default app
