import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server is running on ${port}:${host}`);
  await app.listen(port, host);
}
bootstrap();
