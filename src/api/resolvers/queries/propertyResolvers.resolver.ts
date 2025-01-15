import { PropertyQueryResolvers } from "../../../models/common.models";
import { GetPropertiesService } from "../../../queries/getPropertiesService";
import { GetPropertyByIdService } from "../../../queries/getPropertyByIdService";

export const propertyQueryResolvers: PropertyQueryResolvers = {
    getProperties: async (_, args) => {
        const service = new GetPropertiesService();
        const filters = args.filters || {};
        const sortKey = args.sortKey || "";
        return await service.execute(filters, sortKey);
    },
    getPropertyById: async (_, args) => {
        const service = new GetPropertyByIdService();
        return await service.execute(args.id);
    },
}

