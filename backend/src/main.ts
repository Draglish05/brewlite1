import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Cho phép frontend (cổng 3000) gọi API
  app.enableCors();

  // Cổng chạy: lấy trong file .env, nếu không có thì dùng 4000
  let port = 4000;
  if (process.env.PORT) {
    port = Number(process.env.PORT);
  }
  await app.listen(port);
}
bootstrap();
