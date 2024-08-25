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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnbController = void 0;
const common_1 = require("@nestjs/common");
const fnb_service_1 = require("./fnb.service");
const fnb_api_1 = require("../utils/fnb_api");
let FnbController = class FnbController {
    constructor(fnbService, fnbApi) {
        this.fnbService = fnbService;
        this.fnbApi = fnbApi;
    }
    async getTransactions(account, startDate, endDate) {
        return await this.fnbService.getTransactions(account, startDate, endDate);
    }
    async getFakeTransactions() {
        return await this.fnbApi.getFakeTransactions();
    }
};
exports.FnbController = FnbController;
__decorate([
    (0, common_1.Get)("getTransactions"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FnbController.prototype, "getTransactions", null);
__decorate([
    (0, common_1.Get)("getFakeTransactions"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FnbController.prototype, "getFakeTransactions", null);
exports.FnbController = FnbController = __decorate([
    (0, common_1.Controller)("fnb"),
    __metadata("design:paramtypes", [fnb_service_1.FnbService,
        fnb_api_1.FNBApi])
], FnbController);
//# sourceMappingURL=fnb.controller.js.map