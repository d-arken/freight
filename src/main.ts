import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(
    `Server is running on 
    ${process.env.PORT || 3000},
    ${process.env.HOST || "localhost"}`
  );
  await app.listen(process.env.PORT || 3000, process.env.HOST || "localhost");
}
bootstrap();
