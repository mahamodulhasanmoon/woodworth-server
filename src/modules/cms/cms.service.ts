import { Contact, Goal, Slider, Speciality, Warrenty } from "./cms.model"

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
  


  // for Contact CMS Services
  export const createNewContactService = async (data:String) => {

    try {
       const result = await Contact.create(data);
       return   result
   } catch (error) {
       throw new Error(error)
   }
 }
  
 export const getContactsService = async () => {
  try {
    const result = await Contact.find({});

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

// Goals

export const createGoalService = async (data:String) => {

  try {
     const result = await Goal.create(data);
     return   result
 } catch (error) {
     throw new Error(error)
 }
}

export const getGoalService = async () => {
try {
  const result = await Goal.find({});

  return result;
} catch (error) {
  throw new Error(error);
}
};


// Why Choose Me

export const createSpecialityService = async (data:String) => {

  try {
     const result = await Speciality.create(data);
     return   result
 } catch (error) {
     throw new Error(error)
 }
}

export const getSpeciallityService = async () => {
try {
  const result = await Speciality.find({});

  return result;
} catch (error) {
  throw new Error(error);
}
};
  
  
  
  


 

