import { GetPropertiesService } from "../../../queries/getPropertiesService";
import { GetPropertyByIdService } from "../../../queries/getPropertyByIdService";

export const propertyQueryResolvers = {
    //@ts-ignore
    getProperties: async (_, args) => {
        const service = new GetPropertiesService();
        const filters = args.filters || {};
        const sortKey = args.sortKey || "createdAt";
        return await service.execute(filters, sortKey);
      },
      //@ts-ignore
      getPropertyById: async (_, args) => {
        const service = new GetPropertyByIdService();
        return await service.execute(args.id);
      },
      hello: () => 'Hello World!',
    }