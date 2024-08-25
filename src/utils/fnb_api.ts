import axios, { AxiosError, AxiosResponse } from "axios";
import { v4 as uuid } from "uuid";
import { getSecret } from "./secrets";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { config } from 'dotenv';
import { Injectable } from "@nestjs/common";
import { CustomResponse } from "./custom_response";
const tag = "🔵🔵🔵 FNBApi 🔵";

@Injectable()
export class FNBApi {
  constructor() {
    console.log(`${tag} FNBApi constructor, config() has run`)
  }
  async getAccessToken(local: boolean): Promise<string> {
    let authUrl: string;
    let clientId: string;
    let clientSecret: string;

    if (local) {
      authUrl = process.env.AUTH_URL;
      clientId = process.env.CLIENT_ID;
      clientSecret = process.env.CLIENT_SECRET;
    } else {
      authUrl = await getSecret("AUTH_URL");
      clientId = await getSecret("CLIENT_ID");
      clientSecret = await getSecret("CLIENT_SECRET");
    }

    const scope = "i_can";
    const authHeaderValue = `Basic ${Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString("base64")}`;

    const auth_data = {
      grant_type: "client_credentials",
      scope: scope,
    };

    try {
      const response: AxiosResponse = await axios.post(authUrl, auth_data, {
        headers: {
          Authorization: authHeaderValue,
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        const authResponse: AuthResponse = response.data;
        return authResponse.access_token;
      } else {
        throw new Error(
          `Authentication failed with status: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      const msg = `Authentication failed: ${error}`;
      console.error(`${tag} We fell down hard, Boss! : ${msg}`);
      throw new Error(`${msg}`);
    }
  }
  async refreshToken(): Promise<any> {
    const baseUrl = await getSecret("BASE_URL");
    const url = `${baseUrl}/oauth2/token/v2`;
    const clientId = await getSecret("CLIENT_ID");
    const clientSecret = await getSecret("CLIENT_SECRET");
    const refresh_payload = {
      grant_type: "refresh_token",
      refresh_token: "", //self.refresh_token,
      client_id: clientId,
      client_secret: clientSecret,
    };
    try {
      const response: TokenResponse = await axios.get(url, {
        data: refresh_payload,
      });
      return response.refresh_token;
    } catch (e) { }
  }

  async getFakeTransactions(): Promise<CustomResponse> {
    console.log(`${tag} ... getting fake Transactions ... `);
    config();
    const dev = process.env.STATUS;
    console.log(`${tag} dev status from .env: 🍎 ${dev} 🍎`);

    let url: string;
    if (dev === 'dev') {
      url = `${process.env.FAKE_BANK_LOCAL}getFakeFNBBatchTransactions`;
    } else {
      url = `${process.env.FAKE_BANK_REMOTE}getFakeFNBBatchTransactions`;
    }

    try {
      console.log(`\n${tag} ............. calling: ${url}\n`);
      const resp = await axios.get(url);
      console.log(`${tag} fake transactions response, 🔵 status: ${resp.status}`);
      const customResponse = new CustomResponse(resp.data.status, resp.data.message, resp.data.list);
      if (customResponse.status == 200) {
        customResponse.list.forEach((tx: any) => {
          console.log(`${tag} Transaction, id: ${tx.id} 🍎 amount: ${tx.amount}`);
        });
        console.log(`\n${tag} 🥬 🥬 fake transactions: 🍎 ${customResponse.list.length} 🍎`);
      } else {
        console.log(`\n${tag} ... ran into bleeping error: ${JSON.stringify(customResponse)}\n`)
      }
      return customResponse;
    } catch (error) {
      if (error instanceof AxiosError) {
        // Axios error
        const axiosError = error as AxiosError;
        const errorMessage = axiosError.message;
        const statusCode = axiosError.response?.status || 500;

        // Create a custom error object
        const customError = new CustomResponse(statusCode, errorMessage, []);
        console.error(`${tag} Axios Error: ${JSON.stringify(customError)}`);
        return customError;
      } else {
        // Other error
        console.error(`${tag} Other Error: ${error.message}`);
        const customError = new CustomResponse(400, error.message, []);
        return customError
      }
    }
  }

  async getTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any> {
    console.log(`${tag} getTransactionHistory ... `);

    let baseUrl: string;
    let accessToken: string;

    baseUrl = await getSecret("BASE_URL");
    accessToken = await this.getAccessToken(false);

    try {
      const request_id: string = uuid();
      const idempotency_id: string = uuid();

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

      const response: AxiosResponse = await axios.post(url, data, {
        headers: headers,
      });

      if (response.status === 200) {
        const transactionResponse: TransactionResponse = response.data;
        console.log(
          `${tag} Transactions found: ${transactionResponse.list.length}`
        );
        return transactionResponse.list;
      } else {
        const msg = `getTransactionHistory failed with status: ${response.status} ${response.statusText}`;
        console.error(`${tag} ${msg}`);
        throw new Error(msg);
      }
    } catch (e) {
      console.log(`We have a problem, Houston! : ${e}`);
      throw new Error(`Failed to ge transactions: ${e}`);
    }
  }
}

interface AuthResponse {
  access_token: string;
}
interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

interface TransactionResponse {
  list: Transaction[];
}
