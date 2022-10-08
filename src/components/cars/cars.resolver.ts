import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { NewCarInput } from "./dto/new-car.inputs";
import { Car } from "./entities/car.entitiy";

@Resolver()
export class CarsResolver {
    constructor(private carsService: CarsService) {}

    @Query((returns) => [Car])
    public async cars(): Promise<Car[]> {
        return await this.carsService.getAllCars().catch((error) => {
            throw error;
        });
    }

    @Mutation((returns) => Car)
    public async addNewCar(@Args("newCarData") newCarData: NewCarInput): Promise<Car> {
        return await this.carsService.addCar(newCarData).catch((error) => {
            throw error;
        });
    }

    
    
}