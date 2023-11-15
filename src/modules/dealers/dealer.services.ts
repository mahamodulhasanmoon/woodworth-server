import Dealer from "./dealers.model";

export const createDealerService = async (delearInfo:Object) => {

    try {
       const data = await Dealer.create(delearInfo)
       return data
   
    } catch (error) {
       throw new Error(error)
    }
   
   };

   export const getAllDealersService = async (queries:any) => {
      let query: any = {};
  
      if (queries) {
          const { category } = queries;
          category && (query.category = category);
      }
      try {
         const data = await Dealer.find(query)
         const totalData = await Dealer.countDocuments();
         return   {data,totalData}
     } catch (error) {
         throw new Error(error)
     }
   }
   export const getDealersByIdService = async (id:String) => {

      try {
         const data = await Dealer.findById(id)
         return   data
     } catch (error) {
         throw new Error(error)
     }
   }

   export const updateDealersByIdService = async (id:String,productsData:Object) => {

    try {
        const data = await Dealer.findByIdAndUpdate(id, productsData, { new: true })
        return   {data}
    } catch (error) {
        throw new Error(error)
    }
     
    
    }

    export const deleteDealersByIdService = async (id:String) => {

        try {
            const data = await Dealer.findByIdAndDelete(id);
            if (!data) {
                throw new Error('Products not found'); 
            }
            return data;
        } catch (error) {
          
            throw new Error(`Error deleting category: ${error.message}`);
        }
         
        
        }


 