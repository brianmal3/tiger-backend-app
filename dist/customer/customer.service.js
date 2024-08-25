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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const firestore_util_1 = require("../utils/firestore_util");
let CustomerService = class CustomerService {
    constructor(fire) {
        this.fire = fire;
    }
    create(createCustomerDto) {
        const id = `${new Date().getTime()}`;
        return this.fire.writeData("customers", id, createCustomerDto);
    }
    findAll() {
        return this.fire.readAllData("customers");
    }
    findOne(id) {
        return this.fire.readDataByField("customers", "id", id);
    }
    update(id, updateCustomerDto) {
        return this.fire.writeData("customers", id, updateCustomerDto);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_util_1.FirestoreService])
], CustomerService);
//# sourceMappingURL=customer.service.js.map