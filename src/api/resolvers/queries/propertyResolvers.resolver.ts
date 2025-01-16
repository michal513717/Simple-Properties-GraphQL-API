import { PropertyQueryResolvers } from "../../../models/common.models";
import { GetAllPropertiesService } from "../../../queries/getAllPropertiesService";
import { GetPropertiesWithFilterService } from "../../../queries/getPropertiesWithFilter";
import { GetPropertyByIdService } from "../../../queries/getPropertyByIdService";

export const propertyQueryResolvers: PropertyQueryResolvers = {
    getPropertyById: async (_, args) => {
        return await GetPropertyByIdService.execute(args.id);
    },

    getAllProperties: async () => {
        try {
            return await GetAllPropertiesService.execute();
        } catch (error) {
            console.error("Error fetching all properties:", error);
            throw new Error("Failed to fetch properties.");
        }
    },

    getPropertiesWithFilter: async (_, args) => {
        try {
            return await GetPropertiesWithFilterService.execute(args);
        } catch (error) {
            console.error("Error fetching filtered properties:", error);
            throw new Error("Failed to fetch properties with filters.");
        }
    },
}

