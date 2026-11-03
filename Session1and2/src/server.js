import express from 'express'



const app = express();

app.use(express.json());
//First Endpoint ,uses GET HTTP METHOD AZIN FETCH INFORMATION HENCE APP.GET
//VIEW PRODUCTS  IS THE NAME THE USER WILL PUT AT THE END OF OUR BASE URL
// BASE URL = http://localhost:3008
// our url becomes BASE URL/VIEWPRODUCTS.


const products = ["beans","carrot","maize"]
//products is an array which  user will get wen they visit /viewproducts endpoints
app.get('/viewproducts' , (req,res)=>{

    res.json(products)






});

const port = 3006;



app.listen(port ,()=> {

    console.log(`server is listening at ${port}`);





});