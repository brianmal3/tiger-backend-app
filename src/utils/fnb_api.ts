import axios, { AxiosResponse } from "axios";
import { v4 as uuid } from "uuid";
import { getSecret } from "./secrets";
import { Transaction } from "src/transaction/entities/transaction.entity";

export class FNBApi {
  static async getAccessToken(local: boolean): Promise<string> {
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
      console.error(`${FNBApi.tag} We fell down hard, Boss! : ${msg}`);
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
    } catch (e) {}
  }

  static tag = "🔵🔵 FNBApi";

  static async getFakeTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    console.log(`${FNBApi.tag} getFakeTransactions ... `);

    const dev = process.env.STATUS;
    if (dev) {
      const url = `${process.env.FAKE_BANK_LOCAL}getFakeFNBBatchTransactions`;
      const resp = await axios.get(url);
      if (resp.status === 200) {
        return resp.data;
      } else {
        throw new Error(
          `getFakeTransactions failed with status: ${resp.status}`
        );
      }
    } else {
      const url = `${process.env.FAKE_BANK_REMOTE}getFakeFNBBatchTransactions`;
      const resp = await axios.get(url);
      if (resp.status === 200) {
        return resp.data;
      } else {
        throw new Error(
          `getFakeTransactions failed with status: ${resp.status}`
        );
      }
    }

    return [];
  }

  static async getTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any> {
    console.log(`${FNBApi.tag} getTransactionHistory ... `);

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
      console.log(`${FNBApi.tag} getTransactionHistory ... calling: ${url}`);

      const response: AxiosResponse = await axios.post(url, data, {
        headers: headers,
      });

      if (response.status === 200) {
        const transactionResponse: TransactionResponse = response.data;
        console.log(
          `${FNBApi.tag} Transactions found: ${transactionResponse.list.length}`
        );
        return transactionResponse.list;
      } else {
        const msg = `getTransactionHistory failed with status: ${response.status} ${response.statusText}`;
        console.error(`${FNBApi.tag} ${msg}`);
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
