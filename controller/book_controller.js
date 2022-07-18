import mongoose from "mongoose";
import village_model from "../model/village_data.js";

class filter{
    static romantic_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Romantic"});
            console.log(result);
            res.render('romantic',{'title':'Collection of all romantic books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
}


export default filter;