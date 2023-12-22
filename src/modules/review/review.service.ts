import { Review } from "./review.model";




export const getAlllReviewService = async () => {

    const data = await Review.find({}).sort({ updatedAt: 1 });

    const totalData = await Review.countDocuments();
    return   {data,totalData}
 

}
export const createReviewService = async (categoryData:Object) => {

    const data = await Review.create(categoryData)
    return data

};
export const updateCategoryService = async (id:String,data:Object) => {

    const result = await Review.findByIdAndUpdate(id,data)
    return result

};
export const deleteReviewService = async (id:String) => {
    try {
        const data = await Review.findByIdAndDelete(id);
        if (!data) {
            throw new Error('Category not found'); 
        }
        return data;
    } catch (error) {
      
        throw new Error(`Error deleting category: ${error.message}`);
    }
};