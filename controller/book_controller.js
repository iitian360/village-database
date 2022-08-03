import mongoose from "mongoose";
import village_model from "../model/village_data.js";

const msj="No books added yet";

class filter{
    static romantic_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Romantic"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all romantic books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static history_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"History"});
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all historical books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static biology_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Biology"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all biology books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static novel_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Navel"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all navel books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static story_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Story"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all story books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static science_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Science"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all science fiction books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static math_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Mathmatics"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all mathmatics books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static business_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Business"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all business books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static poetry_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Poetry"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all poetry books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    static biography_book= async (req,res)=>{
        try{
            const result= await village_model.find({"post":"Biography"});
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all biography books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    
    static all_book= async (req,res)=>{
        try{
            const result= await village_model.find();
            // console.log(result);
            if(result.length==0){
                res.render('message',{'title':'Sorry! book are added soon'});
            }
            else
            res.render('history',{'title':'Collection of all books!', data:result});
            
        }

        catch(err){
            console.log(err);
            
        }
    }
    
}


export default filter;