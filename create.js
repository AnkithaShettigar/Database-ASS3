const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Human_Resource";

const Schema = mongoose.Schema;

const DataSchema = new Schema({

});

async function main(){
    try{
         await mongoose.connect();
         const Datamodel = mongoose.model('employee',DataSchema)
         
    }catch(error){
        console.log(error);
    }
}
main()