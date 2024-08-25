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
exports.BatchController = void 0;
const common_1 = require("@nestjs/common");
const batch_service_1 = require("./batch.service");
const update_batch_dto_1 = require("./dto/update-batch.dto");
let BatchController = class BatchController {
    constructor(batchService) {
        this.batchService = batchService;
    }
    findAll() {
        return this.batchService.findAll();
    }
    findOne(id) {
        return this.batchService.findOne(+id);
    }
    update(id, updateBatchDto) {
        return this.batchService.update(+id, updateBatchDto);
    }
};
exports.BatchController = BatchController;
__decorate([
    (0, common_1.Get)('/getAllBatches'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BatchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/getBatchById'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BatchController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/updateBatch'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_batch_dto_1.UpdateBatchDto]),
    __metadata("design:returntype", void 0)
], BatchController.prototype, "update", null);
exports.BatchController = BatchController = __decorate([
    (0, common_1.Controller)('batch'),
    __metadata("design:paramtypes", [batch_service_1.BatchService])
], BatchController);
//# sourceMappingURL=batch.controller.js.map