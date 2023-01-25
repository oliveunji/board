import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
// import { config } from 'dotenv';

// config();
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
