import { PropertyRepository } from "../repositories/propertyRepository";

export class DeletePropertyService {
  
  static async execute(id: string): Promise<boolean> {

    if (!id) {
      throw new Error("Property ID is required.");
    }

    const success = await PropertyRepository.deleteById(id);

    if (!success) {
      throw new Error(`Property with ID ${id} not found.`);
    }

    return success;
  }
}
