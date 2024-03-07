"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(`Server is running on 
    ${process.env.PORT || 3000},
    ${process.env.HOST || "localhost"}`);
    await app.listen(process.env.PORT || 3000, process.env.HOST || "localhost");
}
bootstrap();
//# sourceMappingURL=main.js.map