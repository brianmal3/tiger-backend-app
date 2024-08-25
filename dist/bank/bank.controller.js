"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const bank_service_1 = require("./bank.service");
const create_bank_dto_1 = require("./dto/create-bank.dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    async create(createBankDto) {
        return await this.bankService.createBank(createBankDto);
    }
    async findAll() {
        return await this.bankService.findAll();
    }
    async doAllBanks() {
        return await this.bankService.doAllBanks();
    }
    async findOne(id) {
        return await this.bankService.findOne(id);
    }
    async findByName(name) {
        return await this.bankService.findByName(name);
    }
};
exports.BankController = BankController;
__decorate([
    (0, common_1.Post)("addBank"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_dto_1.CreateBankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("getBanks"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("doAllBanks"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BankController.prototype, "doAllBanks", null);
__decorate([
    (0, common_1.Get)("getBank"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("getBankByName"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findByName", null);
exports.BankController = BankController = __decorate([
    (0, common_1.Controller)("bank"),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
//# sourceMappingURL=bank.controller.js.map