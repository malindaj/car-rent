import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    playground:  true,
    debug: true ,
    autoSchemaFile: 'schema.gql',
    driver: ApolloDriver
  }),
  ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
