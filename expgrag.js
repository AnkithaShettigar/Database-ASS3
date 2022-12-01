const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/Human_Resource";

const Schema = mongoose.Schema;

const DataSchema = new Schema({


    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    salary:{
        type:String
    },
    department:{
        type:String
    },
    lastCompany:{
        type:String
    },
    lastSalary:{
        type:String
    },
    overallExp:{
        type:String
    },
    contactInfo:{
        type:String
    },
    yearGrad:{
        type:String
    },
    gradStream:{
        type:String
    },
})

async function main(){
    console.log("connecting....")

try {
       //connect database
       await mongoose.connect(url);
       const Datamodel = mongoose.model('employee',DataSchema);

       const data = {
        "yearGrad":{ $gte:"2015"},
        "overallExp": { $gt: "1"}
       }

    const multidata = await Datamodel.find(data);
    console.log('data....',multidata);

} catch (error) {
    console.log(error)
    
}
console.log("done");

}

main();