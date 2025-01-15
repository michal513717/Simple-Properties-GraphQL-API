import { PropertyMutationResolvers } from "../../../models/common.models";
import { AddPropertyService } from "../../../services/addPropertyService";
import { DeletePropertyService } from "../../../services/deletePropertyService";

export const propertyMutationResolvers: PropertyMutationResolvers = {
    addProperty: async (_, data) => {
        try {
            await AddPropertyService.execute(data.propertyData);
        } catch (error) {
            console.error("Error in addProperty resolver:", error);
            throw new Error("Failed to add property.");
        }
    },

    deleteProperty: async (_, { id }) => {
        try {
            await DeletePropertyService.execute(id);
        } catch (error) {
            console.error(error)
        }
    },
};