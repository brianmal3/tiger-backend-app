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
exports.FNBApi = void 0;
const axios_1 = require("axios");
const uuid_1 = require("uuid");
const secrets_1 = require("./secrets");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
const custom_response_1 = require("./custom_response");
const tag = "🔵🔵🔵 FNBApi 🔵";
let FNBApi = class FNBApi {
    constructor() {
        console.log(`${tag} FNBApi constructor, config() has run`);
    }
    async getAccessToken(local) {
        let authUrl;
        let clientId;
        let clientSecret;
        if (local) {
            authUrl = process.env.AUTH_URL;
            clientId = process.env.CLIENT_ID;
            clientSecret = process.env.CLIENT_SECRET;
        }
        else {
            authUrl = await (0, secrets_1.getSecret)("AUTH_URL");
            clientId = await (0, secrets_1.getSecret)("CLIENT_ID");
            clientSecret = await (0, secrets_1.getSecret)("CLIENT_SECRET");
        }
        const scope = "i_can";
        const authHeaderValue = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`;
        const auth_data = {
            grant_type: "client_credentials",
            scope: scope,
        };
        try {
            const response = await axios_1.default.post(authUrl, auth_data, {
                headers: {
                    Authorization: authHeaderValue,
                    "Content-Type": "application/json",
                },
            });
            if (response.status == 200) {
                const authResponse = response.data;
                return authResponse.access_token;
            }
            else {
                throw new Error(`Authentication failed with status: ${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            const msg = `Authentication failed: ${error}`;
            console.error(`${tag} We fell down hard, Boss! : ${msg}`);
            throw new Error(`${msg}`);
        }
    }
    async refreshToken() {
        const baseUrl = await (0, secrets_1.getSecret)("BASE_URL");
        const url = `${baseUrl}/oauth2/token/v2`;
        const clientId = await (0, secrets_1.getSecret)("CLIENT_ID");
        const clientSecret = await (0, secrets_1.getSecret)("CLIENT_SECRET");
        const refresh_payload = {
            grant_type: "refresh_token",
            refresh_token: "",
            client_id: clientId,
            client_secret: clientSecret,
        };
        try {
            const response = await axios_1.default.get(url, {
                data: refresh_payload,
            });
            return response.refresh_token;
        }
        catch (e) { }
    }
    async getFakeTransactions() {
        console.log(`${tag} ... getting fake Transactions ... `);
        (0, dotenv_1.config)();
        const dev = process.env.STATUS;
        console.log(`${tag} dev status from .env: 🍎 ${dev} 🍎`);
        let url;
        if (dev === 'dev') {
            url = `${process.env.FAKE_BANK_LOCAL}getFakeFNBBatchTransactions`;
        }
        else {
            url = `${process.env.FAKE_BANK_REMOTE}getFakeFNBBatchTransactions`;
        }
        try {
            console.log(`\n${tag} ............. calling: ${url}\n`);
            const resp = await axios_1.default.get(url);
            console.log(`${tag} fake transactions response, 🔵 status: ${resp.status}`);
            const customResponse = new custom_response_1.CustomResponse(resp.data.status, resp.data.message, resp.data.list);
            if (customResponse.status == 200) {
                customResponse.list.forEach((tx) => {
                    console.log(`${tag} Transaction, id: ${tx.id} 🍎 amount: ${tx.amount}`);
                });
                console.log(`\n${tag} 🥬 🥬 fake transactions: 🍎 ${customResponse.list.length} 🍎`);
            }
            else {
                console.log(`\n${tag} ... ran into bleeping error: ${JSON.stringify(customResponse)}\n`);
            }
            return customResponse;
        }
        catch (error) {
            if (error instanceof axios_1.AxiosError) {
                const axiosError = error;
                const errorMessage = axiosError.message;
                const statusCode = axiosError.response?.status || 500;
                const customError = new custom_response_1.CustomResponse(statusCode, errorMessage, []);
                console.error(`${tag} Axios Error: ${JSON.stringify(customError)}`);
                return customError;
            }
            else {
                console.error(`${tag} Other Error: ${error.message}`);
                const customError = new custom_response_1.CustomResponse(400, error.message, []);
                return customError;
            }
        }
    }
    async getTransactions(account, startDate, endDate) {
        console.log(`${tag} getTransactionHistory ... `);
        let baseUrl;
        let accessToken;
        baseUrl = await (0, secrets_1.getSecret)("BASE_URL");
        accessToken = await this.getAccessToken(false);
        try {
            const request_id = (0, uuid_1.v4)();
            const idempotency_id = (0, uuid_1.v4)();
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "X-Request-ID": request_id,
                "X-Idempotency-ID": idempotency_id,
            };
            const data = {
                fromDate: startDate,
                toDate: endDate,
            };
            const url = `${baseUrl}/transaction-history/retrieve/v2/${account}`;
            console.log(`${tag} getTransactionHistory ... calling: ${url}`);
            const response = await axios_1.default.post(url, data, {
                headers: headers,
            });
            if (response.status === 200) {
                const transactionResponse = response.data;
                console.log(`${tag} Transactions found: ${transactionResponse.list.length}`);
                return transactionResponse.list;
            }
            else {
                const msg = `getTransactionHistory failed with status: ${response.status} ${response.statusText}`;
                console.error(`${tag} ${msg}`);
                throw new Error(msg);
            }
        }
        catch (e) {
            console.log(`We have a problem, Houston! : ${e}`);
            throw new Error(`Failed to ge transactions: ${e}`);
        }
    }
};
exports.FNBApi = FNBApi;
exports.FNBApi = FNBApi = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FNBApi);
//# sourceMappingURL=fnb_api.js.map