import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { BoardsModule } from './boards/boards.module';
// import { typeORMConfig } from './configs/typeorm.config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'board-app',
      entities: [__dirname + '/../**/*.entitiy.{js,ts}'],
      synchronize: true,
      ssl: true,
    }),
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
