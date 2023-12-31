import Products from "./products.model";

export const createProductsService = async (productData:Object) => {

 try {
    const data = await Products.create(productData)
    return data

 } catch (error) {
    throw new Error(error)
 }

};


export const getAllProductsService = async (queries: any) => {
    let query: any = {};

    if (queries) {
        const { category,isCanandaRegion,isNewStyle,isAdmin } = queries;
        category && (query.category = (category));
        isCanandaRegion && (query.isCanandaRegion = isCanandaRegion);
        isNewStyle && (query.isNewStyle = isNewStyle);
        isAdmin && (query.isAdmin = Boolean(isAdmin));
    }
   
    if (!query?.category && (!query.isCanandaRegion && !query.isNewStyle  && !query.isAdmin)) {
        query = { category: { $ne: '6554ca644e2d94d787efb661' } };
    }
 
    if(query.isAdmin){
        query={};
    }
  
    try {
        const data = await Products.find(query).sort({ slNo: 1 });
        const totalData = await Products.countDocuments(query);
        return { data, totalData };
    } catch (error) {
        throw new Error(error);
    }
};

// end of the product code service

export const getProductsByIdService = async (id:String) => {

try {
    const data = await Products.findById(id)
    return   {data}
} catch (error) {
    throw new Error(error)
}
 

}

export const updateProductsByIdService = async (id:String,productsData:Object) => {

    try {
        const data = await Products.findByIdAndUpdate(id, productsData, { new: true })
        return   {data}
    } catch (error) {
        throw new Error(error)
    }
     
    
    }

    // status update
export const updateStatusByIdService = async (id:String,productsData:Object) => {

    try {
        const data = await Products.findByIdAndUpdate(id, productsData, { new: true })
        return   {data}
    } catch (error) {
        throw new Error(error)
    }
     
    
    }
export const deleteProductsByIdService = async (id:String) => {

    try {
        const data = await Products.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Products not found'); 
        }
        return data;
    } catch (error) {
      
        throw new Error(`Error deleting category: ${error.message}`);
    }
     
    
    }
