import { FilterQuery, Model, UpdateQuery, Document } from "mongoose";

export abstract class EntityRepository<T extends Document>{
    constructor(protected readonly entityModel: Model<T>) { }

    async findOne(entityFilterQuery: FilterQuery<T>,
        projection?: Record<string, unknown>): Promise<T | null> {
        return await this.entityModel.findOne(entityFilterQuery, {
            __v: 0, ...projection
        }).exec();
    }

    async findAll(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
        return await this.entityModel.find(entityFilterQuery);
    }

    async create(createEntityData: unknown): Promise<T> {
        const newEntity = new this.entityModel(createEntityData);
        return await newEntity.save();
    }

    async findOneAndUpdate(entityFilterQuery: FilterQuery<T>,
        updateEntityData: UpdateQuery<unknown>): Promise<T | null> {
        return await this.entityModel.findOneAndUpdate(entityFilterQuery,
            updateEntityData, { new: true });
    }

    async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
        const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
        return deleteResult.deletedCount >= 1;
    }
}