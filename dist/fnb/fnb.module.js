"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnbModule = void 0;
const common_1 = require("@nestjs/common");
const fnb_service_1 = require("./fnb.service");
const fnb_controller_1 = require("./fnb.controller");
const fnb_api_1 = require("../utils/fnb_api");
const firestore_util_1 = require("../utils/firestore_util");
let FnbModule = class FnbModule {
};
exports.FnbModule = FnbModule;
exports.FnbModule = FnbModule = __decorate([
    (0, common_1.Module)({
        controllers: [fnb_controller_1.FnbController],
        providers: [fnb_service_1.FnbService, fnb_api_1.FNBApi, firestore_util_1.FirestoreService],
    })
], FnbModule);
//# sourceMappingURL=fnb.module.js.map