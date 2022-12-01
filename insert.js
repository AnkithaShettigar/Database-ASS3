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

       //insert data
       const employeeData = [
        {
          "firstName": "John",
          "lastName": "Doe",
          "salary": "25000",
          "department": "HR",
          "lastCompany": "X",
          "lastSalary": "10000",
          "overallExp": "2",
          "contactInfo": "1234567890",
          "yearGrad": "2016",
          "gradStream": "CSE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "roh",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        }
    ];

    const dataModelArray = employeeData.map((data)=>{
        const dataModelInstance = new Datamodel(data);
        return dataModelInstance;
    })

    const multidata = await Datamodel.insertMany(dataModelArray);
    console.log('data....',multidata);

} catch (error) {
    console.log(error)
    
}
console.log("done");

}

main();