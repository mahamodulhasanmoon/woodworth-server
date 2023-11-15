import { Request, Response } from "express";
import { createCategoryService, deleteCategoryService, getAlllCategoryService, updateCategoryService } from "./categories.services";


export const getAllCategoryController = async (req:Request, res:Response) => {
try {
    
    const {data,totalData} = await getAlllCategoryService()

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
// create CategoryService

export const createCategoryController = async (req:Request, res:Response) => {
try {
    
    const data = await createCategoryService(req.body)

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

export const updateCategoryController = async (req:Request, res:Response) => {
try {
    const {id} = req.params
    
    const data = await updateCategoryService(id,req.body)

    res.status(201).json({
        status:201,
        message:"updated Successfully",
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
export const deleteCategoryController = async (req:Request, res:Response) => {
try {
    const {id} = req.params
    
    const data = await deleteCategoryService(id)
    

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