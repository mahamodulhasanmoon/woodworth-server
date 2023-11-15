import { Request, Response } from "express";
import { createNewSliderService, createNewWarrentyService, getSliderService, getWarrentyService } from "./cms.service";

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