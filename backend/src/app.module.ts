import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // Đọc file .env vào process.env
    ConfigModule.forRoot({ isGlobal: true }),
    // Kết nối PostgreSQL bằng TypeORM (thông tin lấy từ .env)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // tự nhận các entity khai báo trong từng module
      synchronize: true, // tự tạo bảng theo entity (chỉ dùng khi phát triển)
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
