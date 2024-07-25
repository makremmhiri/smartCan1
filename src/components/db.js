// const {MongoClient}=require('mongodb')
// let dbConnection
// let uri1='mongodb+srv://makremmhiri:makrem2004@cluster0.cfinog1.mongodb.net/'
// let uri2='mongodb://localhost:27017/poubelle'
// module.exports={
//     connectToDb:(cb)=>{
//         MongoClient.connect('mongodb+srv://makremmhiri:makrem2004@cluster0.cfinog1.mongodb.net/sample_mflix?retryWrites=true&w=majority')
//             .then((client)=>{
//                 dbConnection=client.db()
//                 return cb()
//             })
//             .catch(err=>{
//                 console.log(err)
//                 return cb(err)
//             })
//     },
//     getDb:()=>dbConnection
// }

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://makremmhiri:makrem2004@cluster0.cfinog1.mongodb.net/sample_mflix?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB Atlas!');
});