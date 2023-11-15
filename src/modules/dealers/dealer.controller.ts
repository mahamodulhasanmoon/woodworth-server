import { Request, Response } from "express";
import { createDealerService, deleteDealersByIdService, getAllDealersService, getDealersByIdService, updateDealersByIdService,  } from "./dealer.services";

export const createDealerController = async (req:Request, res:Response) => {
    try {
        const data = await createDealerService(req.body)
    
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

    export const getAllDealerController = async (req:Request, res:Response) => {
        try {
            const category = req.query.categoryId

            
            const {data,totalData} = await getAllDealersService('')
        
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
    export const getDealersByIdController = async (req:Request, res:Response) => {
        try {
            const {id} = req.params

            
            const data = await getDealersByIdService(id)
        
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
        };

        export const updateDealersByIdController = async (req:Request, res:Response) => {
            try {
                const {id} = req.params
                
                const data = await updateDealersByIdService(id,req.body)
            
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


            export const deleteDealersByIdController = async (req:Request, res:Response) => {
                try {
                    const {id} = req.params
                    
                    const data = await deleteDealersByIdService(id)
                    
                
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