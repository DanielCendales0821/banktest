"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const user_1 = __importDefault(require("./routes/user"));
const server = new server_1.default();
//bodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//fileUpload
server.app.use(express_fileupload_1.default());
//routes
server.app.use('/user', user_1.default);
//connection BD
//mongodb://localhost:27017/test
//mongodb+srv://testUser:testUser@cluster0.7nqa6.mongodb.net/Cluster0?retryWrites=true&w=majority
mongoose_1.default.connect('mongodb+srv://testUser:testUser@cluster0.7nqa6.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (err)
        throw err;
    console.log('Database ONLINE');
});
// express (Server)
server.start(() => {
    console.log('servidor corriendo en el puerto ' + server.port);
});
