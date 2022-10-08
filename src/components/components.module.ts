import { Module } from "@nestjs/common";
import { CarsModule } from "./cars/cars.module";

@Module({
    imports: [CarsModule],
    exports: [],
    providers: [],
})
export class ComponentsModule {}