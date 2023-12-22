import { Request, Response } from "express";
import { createReviewService, deleteReviewService, getAlllReviewService } from "./review.service";

export const getAllReviewController = async (req:Request, res:Response) => {
    try {
        
        const {data,totalData} = await getAlllReviewService()
    
        res.status(200).json({
            status:200,
            message:"successfull",
            total:totalData,
            data:data
        });
    } catch (error) {
    
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    } 
    };
    // create ReviewService
    
    export const createReviewController = async (req:Request, res:Response) => {
    try {
        
        const data = await createReviewService(req.body)
    
        res.status(201).json({
            status:201,
            message:"created Successfully",
            data:data
        });
    } catch (error) {
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    } 
    };
    

    export const deleteReviewController = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        
        const data = await deleteReviewService(id)
        
    
        res.status(200).json({
            status:200,
            message:"deleted Successfully",
            data
          
        });
    } catch (error) {
        res.status(400).json({
            status:400,
            error:error,
            message:error.message
        });
    } 
    };