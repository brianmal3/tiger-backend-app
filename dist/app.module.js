"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customer_module_1 = require("./customer/customer.module");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const batch_module_1 = require("./batch/batch.module");
const transaction_module_1 = require("./transaction/transaction.module");
const fnb_module_1 = require("./fnb/fnb.module");
const bank_module_1 = require("./bank/bank.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.PGHOST,
                port: 5432,
                username: process.env.PGUSER,
                password: process.env.PGPASSWORD,
                database: process.env.PGDATABASE,
                autoLoadEntities: true,
                synchronize: true,
                ssl: true,
            }),
            customer_module_1.CustomerModule,
            user_module_1.UserModule,
            batch_module_1.BatchModule,
            transaction_module_1.TransactionModule,
            fnb_module_1.FnbModule,
            bank_module_1.BankModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map