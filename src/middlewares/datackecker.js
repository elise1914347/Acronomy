import AcronomyInfo from "../Models/AcronomyModel"

class Datachecker{
    static validateDescriptionlDuplication=async (req,res,next)=>{
        const Description=await AcronomyInfo.findOne({description:req.body.description});

        //console Description

        if(!Description){
            return next()
        }
        return res.status(404).json({
            status:404,
            message:"Description already exist"
        })
    }
   
}
export default Datachecker;