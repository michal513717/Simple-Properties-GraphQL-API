import { AddPropertyService } from "../../../services/addPropertyService";
import { DeletePropertyService } from "../../../services/deletePropertyService";

export const propertyMutationResolvers: any = {
    //@ts-ignore
    addProperty: async (_, { city, street, state, zipCode }) => {
        const service = new AddPropertyService();
        try {
          return await AddPropertyService.execute({ city, street, state, zipCode });
        } catch (error) {
          console.error("Error in addProperty resolver:", error);
          throw new Error("Failed to add property.");
        }
      },

    //@ts-ignore
    deleteProperty: async (_, { id }) => {
        try {
            const success = await DeletePropertyService.execute(id);
            return { success };
        } catch (error) {
            console.log(error)
        }
    },
};