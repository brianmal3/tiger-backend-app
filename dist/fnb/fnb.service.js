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
exports.FnbService = void 0;
const common_1 = require("@nestjs/common");
const fnb_api_1 = require("../utils/fnb_api");
let FnbService = class FnbService {
    constructor(fnbApi) {
        this.fnbApi = fnbApi;
    }
    async getFakeTransactions() {
        try {
            const transactions = await this.fnbApi.getFakeTransactions();
            return transactions;
        }
        catch (error) {
            if (typeof error === 'string') {
                const customError = JSON.parse(error);
                console.error(`Error from FNBApi: ${JSON.stringify(customError)}`);
                return customError;
            }
            else {
                return {
                    statusCode: 500,
                    message: 'getFakeTransactions - Fucking Server Error',
                };
            }
        }
    }
    async getTransactions(account, startDate, endDate) {
        return await this.fnbApi.getTransactions(account, startDate, endDate);
    }
};
exports.FnbService = FnbService;
exports.FnbService = FnbService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fnb_api_1.FNBApi])
], FnbService);
//# sourceMappingURL=fnb.service.js.map