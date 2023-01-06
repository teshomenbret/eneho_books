import mongoose from 'mongoose'
import config from './src/configs/config.js';
import app from './src/express.js';


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri); 

mongoose.connection.on('error', () => {
    console.log(config.mongoUri)
 throw new Error(`unable to connect to database: ${config.mongoUri}`)
})


app.listen(config.port, (err) => {
 if (err) {
 console.log(err)
 }
 console.info('Server started on port %s.', config.port)
})


