import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import userRoutes from './routes/user';


const server = new Server();

//bodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

//fileUpload
server.app.use( fileUpload() );

//routes
server.app.use('/user', userRoutes);


//connection BD
//mongodb://localhost:27017/test
//mongodb+srv://testUser:testUser@cluster0.7nqa6.mongodb.net/Cluster0?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://testUser:testUser@cluster0.7nqa6.mongodb.net/Cluster0?retryWrites=true&w=majority',
                {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                    useUnifiedTopology: true
                }, ( err ) => {
                    
                    if( err ) throw err;
                    console.log('Database ONLINE');
                }
);

// express (Server)
server.start( () => {
    console.log('servidor corriendo en el puerto ' + server.port);
});