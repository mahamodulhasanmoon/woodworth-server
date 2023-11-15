import Category from "./categories.model";

export const getAlllCategoryService = async () => {

    const data = await Category.find({})
    const totalData = await Category.countDocuments();
    return   {data,totalData}
 

}
export const createCategoryService = async (categoryData:Object) => {

    const data = await Category.create(categoryData)
    return data

};
export const updateCategoryService = async (id:String,data:Object) => {

    const result = await Category.findByIdAndUpdate(id,data)
    return result

};
export const deleteCategoryService = async (id:String) => {
    try {
        const data = await Category.findByIdAndDelete(id);
        console.log(data)
        if (!data) {
            throw new Error('Category not found'); 
        }
        return data;
    } catch (error) {
      
        throw new Error(`Error deleting category: ${error.message}`);
    }
};