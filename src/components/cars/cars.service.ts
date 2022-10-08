import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewCarInput } from "./dto/new-car.inputs";
import { Car } from "./entities/car.entitiy";

@Injectable()
export class CarsService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {

    }

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((error) => {
            throw new InternalServerErrorException();
        });
    }

    public async addCar(newCarData: NewCarInput): Promise<Car> {
        const newCar = this.carRepository.create(newCarData);
         await this.carRepository.save(newCar).catch((error) => {
            throw new InternalServerErrorException();
        }); 
        
        return newCar;
    }
    

}
