import { Request, Response } from "express";
import { createNewSliderService, createNewWarrentyService, deleteSliderService, getSliderService, getWarrentyService ,createNewContactService, getContactsService, createGoalService, getGoalService, createSpecialityService, getSpeciallityService, deleteContactsService, deleteGoalService, deleteSpecialityService, getAboutService, createAboutService, deleteAboutService} from "./cms.service";

export const createNewSliderController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await createNewSliderService(req.body)
    
        res.status(201).json({
            status:201,
            message:"slider Created Successfully",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}


export const getSliderController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await getSliderService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
export const deleteSliderController = async (req:Request,res:Response) => {
    try {
        
const {id} = req.params;
        
        const data= await deleteSliderService(id)
    
        res.status(200).json({
            status:200,
            message:"deleted successfully",
            
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}


// for warrenty page

export const createNewWarrentyController = async (req:Request,res:Response) => {
    try {
        

        
        const data = await createNewWarrentyService(req.body)
    
        res.status(201).json({
            status:201,
            message:"slider Created Successfully",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}


export const getWarrentyController = async (_req:Request,res:Response) => {
    try {
        

        
        const data = await getWarrentyService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}


// contact Section
export const getContactController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await getContactsService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

export const createNewContactController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await createNewContactService(req.body)
    
        res.status(201).json({
            status:201,
            message:"New Record Added",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
export const deleteContactController = async (req:Request,res:Response) => {
    try {
        
const {id} = req.params;
        
        const data= await deleteContactsService(id)
    
        res.status(200).json({
            status:200,
            message:"deleted successfully",
            
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

// Goal set

export const getGoalsController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await getGoalService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

export const createGoalController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await createGoalService(req.body)
    
        res.status(201).json({
            status:201,
            message:"New Record Added",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
export const deleteGoalController = async (req:Request,res:Response) => {
    try {
        
const {id} = req.params;
        
         await deleteGoalService(id)
    
       return res.status(200).json({
            status:200,
            message:"deleted successfully",
            
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

export const getSpecilityController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await getSpeciallityService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

export const createSpecilityController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await createSpecialityService(req.body)
    
        res.status(201).json({
            status:201,
            message:"New Record Added",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
export const deleteSpecialityController = async (req:Request,res:Response) => {
    try {
        
const {id} = req.params;
        
         await deleteSpecialityService(id)
    
       return res.status(200).json({
            status:200,
            message:"deleted successfully",
            
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}


/**
 *
 * 
 * @TODO: About description and Thumbnail
 *
 */

export const getAboutController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await getAboutService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}

export const createAboutController = async (req:Request,res:Response) => {
    try {
        

        
        const data= await createAboutService(req.body)
    
        res.status(201).json({
            status:201,
            message:"New Record Added",
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
export const deleteAboutController = async (req:Request,res:Response) => {
    try {
        
const {id} = req.params;
        
         await deleteAboutService(id)
    
       return res.status(200).json({
            status:200,
            message:"deleted successfully",
            
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    }
}
