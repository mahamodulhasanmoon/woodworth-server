import { Slider, Warrenty } from "./cms.model"

interface WarrentyData {
    claims: string;
    performance: string;
    limitations: string;
    exclusions: string;
    disclaimers: string;
    coverage: string;
  }
  
export const createNewSliderService = async (data:String) => {

    try {
       const result = await Slider.create(data);
       return   result
   } catch (error) {
       throw new Error(error)
   }
 }

export const getSliderService = async () => {

    try {
       const result = await Slider.find({});
       return   result
   } catch (error) {
       throw new Error(error)
   }
 }
export const deleteSliderService = async (id:string) => {

    try {
       const result = await Slider.findByIdAndDelete(id);
       return   result
   } catch (error) {
       throw new Error(error)
   }
 }

//   warrentyPage

export const createNewWarrentyService = async (data: WarrentyData) => {
    try {

      const result = await Warrenty.findOneAndReplace({}, data, { upsert: true, new: true });
  
      if (!result) {
        throw new Error('Failed to replace or create document.');
      }
  
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };


  export const getWarrentyService = async () => {
    try {
      const result = await Warrenty.findOne();
  
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  
  
  
  
  


 

