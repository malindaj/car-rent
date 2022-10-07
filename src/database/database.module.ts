import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm"


@Module({
    imports: [TypeOrmModule.forRoot({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "malinda",
        "password": "Dinu9698@",
        "database": "yourcar",
        "entities": ["dist/**/entities/*{.ts,.js}"],
        "synchronize": true,
    })],
    exports: [TypeOrmModule],
    providers: [],
})
export class DatabaseModule {
    constructor(private connection: Connection) {
        if(connection.isConnected) {
            console.log('DB Connected Successfully')
        }
    }
}