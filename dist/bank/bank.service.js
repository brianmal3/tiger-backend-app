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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const bank_entity_1 = require("./entities/bank.entity");
const secrets_1 = require("../utils/secrets");
const crypto_1 = require("crypto");
const custom_response_1 = require("../utils/custom_response");
const firestore_util_1 = require("../utils/firestore_util");
const tag = "🦠🦠🦠 BankService 🦠";
let BankService = class BankService {
    constructor(fire) {
        this.fire = fire;
    }
    async createSouthAfricanBanks() {
        console.log(`${tag} createSouthAfricanBanks: creating 10 banks}`);
        const bank1 = new bank_entity_1.Bank();
        bank1.name = "First National Bank";
        bank1.bankId = "1";
        bank1.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank2 = new bank_entity_1.Bank();
        bank2.name = "Standard Bank";
        bank2.bankId = "2";
        bank2.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank3 = new bank_entity_1.Bank();
        bank3.name = "Nedbank";
        bank3.bankId = "3";
        bank3.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank4 = new bank_entity_1.Bank();
        bank4.name = "Capitec Bank";
        bank4.bankId = "4";
        bank4.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank5 = new bank_entity_1.Bank();
        bank5.name = "Discovery Bank";
        bank5.bankId = "5";
        bank5.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank6 = new bank_entity_1.Bank();
        bank6.name = "Bank Zero";
        bank6.bankId = "6";
        bank6.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank7 = new bank_entity_1.Bank();
        bank7.name = "African Bank";
        bank7.bankId = "7";
        bank7.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank8 = new bank_entity_1.Bank();
        bank8.name = "Absa Bank";
        bank8.bankId = "8";
        bank8.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank9 = new bank_entity_1.Bank();
        bank9.name = "Tyme Bank";
        bank9.bankId = "9";
        bank9.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const bank10 = new bank_entity_1.Bank();
        bank10.name = "Investec Bank";
        bank10.bankId = "10";
        bank10.id = new Date().getTime() + (0, crypto_1.randomInt)(999);
        const resultBank1 = await this.fire.writeData("Banks", "1", bank1);
        const resultBank2 = await this.fire.writeData("Banks", "2", bank2);
        const resultBank3 = await this.fire.writeData("Banks", "3", bank3);
        const resultBank4 = await this.fire.writeData("Banks", "4", bank4);
        const resultBank5 = await this.fire.writeData("Banks", "5", bank5);
        const resultBank6 = await this.fire.writeData("Banks", "6", bank6);
        const resultBank7 = await this.fire.writeData("Banks", "7", bank7);
        const resultBank8 = await this.fire.writeData("Banks", "8", bank8);
        const resultBank9 = await this.fire.writeData("Banks", "9", bank9);
        const resultBank10 = await this.fire.writeData("Banks", "10", bank10);
        console.log(`${tag} created 10 banks}`);
        const resultBanks = [];
        resultBanks.push(resultBank1);
        resultBanks.push(resultBank2);
        resultBanks.push(resultBank3);
        resultBanks.push(resultBank4);
        resultBanks.push(resultBank5);
        resultBanks.push(resultBank6);
        resultBanks.push(resultBank7);
        resultBanks.push(resultBank8);
        resultBanks.push(resultBank9);
        resultBanks.push(resultBank10);
        const resp = new custom_response_1.CustomResponse(200, `Created 10 banks`, resultBanks);
        return resp;
    }
    async createBank(bankDto) {
        console.log(`${tag} creating bank: ${JSON.stringify(bankDto)}`);
        let clientIdKey;
        let clientSecretKey;
        let apiKeyKey;
        let userNameKey;
        let passwordKey;
        const bankId = `${new Date().getTime()}`;
        if (bankDto.clientId != null) {
            clientIdKey = `${bankId}_CLIENT_ID`;
            const value = bankDto.clientId;
            (0, secrets_1.createSecret)(clientIdKey, value);
        }
        if (bankDto.clientSecret != null) {
            clientSecretKey = `${bankId}_CLIENT_SECRET`;
            const value = bankDto.clientSecret;
            (0, secrets_1.createSecret)(clientSecretKey, value);
        }
        if (bankDto.password != null) {
            passwordKey = `${bankId}_PASSWORD`;
            const value = bankDto.password;
            (0, secrets_1.createSecret)(passwordKey, value);
        }
        if (bankDto.userName != null) {
            userNameKey = `${bankId}_USERNAME`;
            const value = bankDto.userName;
            (0, secrets_1.createSecret)(userNameKey, value);
        }
        if (bankDto.apiKey != null) {
            apiKeyKey = `${bankId}_API_KEY`;
            const value = bankDto.apiKey;
            (0, secrets_1.createSecret)(apiKeyKey, value);
        }
        const bank = new bank_entity_1.Bank();
        bank.name = bankDto.name;
        bank.bankId = bankId;
        bank.apiKeyKey = apiKeyKey;
        bank.clientIdKey = clientIdKey;
        bank.clientSecretKey = clientSecretKey;
        bank.userNameKey = userNameKey;
        bank.passwordKey = passwordKey;
        const resultBank = await this.fire.writeData("Banks", bankId, bank);
        console.log(`${tag} result bank, check keys: ${JSON.stringify(resultBank)}`);
        return new custom_response_1.CustomResponse(200, `Created bank`, [resultBank]);
        ;
    }
    async findAll() {
        const data = await this.fire.readAllData("Banks");
        return new custom_response_1.CustomResponse(200, `Found ${data.length} banks`, data);
    }
    async doAllBanks() {
        return this.createSouthAfricanBanks();
    }
    async findOne(id) {
        return this.fire.readData("Banks", id);
    }
    async findByName(name) {
        return this.fire.readData('Banks', 'name');
    }
};
exports.BankService = BankService;
exports.BankService = BankService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_util_1.FirestoreService])
], BankService);
//# sourceMappingURL=bank.service.js.map