"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankModule = void 0;
const common_1 = require("@nestjs/common");
const bank_service_1 = require("./bank.service");
const bank_controller_1 = require("./bank.controller");
const typeorm_1 = require("typeorm");
let BankModule = class BankModule {
};
exports.BankModule = BankModule;
exports.BankModule = BankModule = __decorate([
    (0, common_1.Module)({
        controllers: [bank_controller_1.BankController],
        providers: [bank_service_1.BankService, (typeorm_1.Repository)],
    })
], BankModule);
//# sourceMappingURL=bank.module.js.map