"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const tag = '🍐🍐🍐🍐 ReconBack 🍐🍐';
async function bootstrap() {
    (0, dotenv_1.config)();
    console.log(`${tag} ReconBack is starting!`);
    console.log(`${tag} ReconBack db: 🍎 ${process.env.PGDATABASE} 🍎`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(8080);
    (0, app_1.initializeApp)({
        credential: (0, app_1.applicationDefault)(),
    });
    console.log(`${tag} Firebase has been initialized!`);
    const db = (0, firestore_1.getFirestore)();
    common_1.Logger.log(`${tag} Firestore has been setup: 🍎 ${db.databaseId} 🍎`);
}
bootstrap();
//# sourceMappingURL=main.js.map