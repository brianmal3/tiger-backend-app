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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const bank_entity_1 = require("./entities/bank.entity");
const typeorm_1 = require("typeorm");
const secrets_1 = require("../utils/secrets");
const tag = "🦠🦠🦠 BankService 🦠";
let BankService = class BankService {
    constructor(bankRepository) {
        this.bankRepository = bankRepository;
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
        const resultBank = await this.bankRepository.save(bank);
        console.log(`${tag} result bank, check keys: ${JSON.stringify(resultBank)}`);
        return resultBank;
    }
    async findAll() {
        return this.bankRepository.find();
    }
    async findOne(id) {
        return this.bankRepository.findOne({ where: { id: id } });
    }
    async findByName(name) {
        return this.bankRepository.findOne({ where: { name: name } });
    }
    async update(id, updateBankDto) {
        return this.bankRepository.update(id, updateBankDto);
    }
    remove(id) {
        return this.bankRepository.delete(id);
    }
};
exports.BankService = BankService;
exports.BankService = BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BankService);
//# sourceMappingURL=bank.service.js.map