import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: '../db',
  entities: [User],
  synchronize: true,
};

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(config), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
