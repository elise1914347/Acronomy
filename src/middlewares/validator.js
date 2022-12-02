import { check,validationResult } from "express-validator";
//import User from "../models/userModel"

class Validator{

    static validateInput=(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();
    }
    
    static newAccountRules(){
        return[
        
            
            check("description","your description sis empty").isAlphanumeric()
           
        ];
    }
   
     
    }

export default Validator;