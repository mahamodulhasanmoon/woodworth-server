import { Request, Response } from "express";
import { createProductsService,getAllProductsService,getProductsByIdService,updateProductsByIdService,deleteProductsByIdService, updateStatusByIdService } from "./products.services";

interface queries{
    category: string | null | any,
    isNewStyle : string | null | any
    isCanandaRegion : string | null | any
    isAdmin : Boolean | null | any
}
export const createPoductsController = async (req:Request, res:Response) => {
    try {
        const data = await createProductsService(req.body)
    
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
    
    export const getAllProductsController = async (req:Request, res:Response) => {
        try {
            const {categoryId,isNewStyle,isCanandaRegion,isAdmin} = req.query
            const queries:queries = {
                category:categoryId,
                isNewStyle:isNewStyle,
                isCanandaRegion:isCanandaRegion,
                isAdmin:isAdmin,
                // isAdmin:isAdmin
            }
            
            const {data,totalData} = await getAllProductsService(queries)
        
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
    export const getProductsByIdController = async (req:Request, res:Response) => {
        try {
            const {id}= req.params
            const {data} = await getProductsByIdService(id)
        
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

        export const deleteProductsByIdController = async (req:Request, res:Response) => {
            try {
                const {id} = req.params
                
                const data = await deleteProductsByIdService(id)
                
            
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

            export const updateProductsByIdController = async (req:Request, res:Response) => {
                try {
                    const {id} = req.params
                    
                    const data = await updateProductsByIdService(id,req.body)
                
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
            export const updateStatusByIdController = async (req:Request, res:Response) => {
                try {
                    const {id} = req.params;
                    
                    
                    const query = req.query
                    const data = await updateStatusByIdService(id,query)
                
                    res.status(200).json({
                        status:200,
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