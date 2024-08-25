import { Inject, Injectable } from "@nestjs/common";
import { CreateBankDto } from "./dto/create-bank.dto";
import { Bank } from "./entities/bank.entity";
import { createSecret } from "src/utils/secrets";
import { randomInt } from "crypto";
import { CustomResponse } from "src/utils/custom_response";
import { FirestoreService } from "src/utils/firestore_util";
const tag = "🦠🦠🦠 BankService 🦠";

@Injectable()
export class BankService {
  constructor(
    private readonly fire: FirestoreService,
   
  ) { }

  async createSouthAfricanBanks(): Promise<CustomResponse> {
    console.log(`${tag} createSouthAfricanBanks: creating 10 banks}`);
    const bank1 = new Bank();
    bank1.name = "First National Bank";
    bank1.bankId = "1";
    bank1.id = new Date().getTime() + randomInt(999);
    //
    const bank2 = new Bank();
    bank2.name = "Standard Bank";
    bank2.bankId = "2";
    bank2.id = new Date().getTime() + randomInt(999);
    //
    const bank3 = new Bank();
    bank3.name = "Nedbank";
    bank3.bankId = "3";
    bank3.id = new Date().getTime() + randomInt(999);
    //
    const bank4 = new Bank();
    bank4.name = "Capitec Bank";
    bank4.bankId = "4";
    bank4.id = new Date().getTime() + randomInt(999);
    //
    const bank5 = new Bank();
    bank5.name = "Discovery Bank";
    bank5.bankId = "5";
    bank5.id = new Date().getTime() + randomInt(999);
    //
    const bank6 = new Bank();
    bank6.name = "Bank Zero";
    bank6.bankId = "6";
    bank6.id = new Date().getTime() + randomInt(999);
    //
    const bank7 = new Bank();
    bank7.name = "African Bank";
    bank7.bankId = "7";
    bank7.id = new Date().getTime() + randomInt(999);
    //
    const bank8 = new Bank();
    bank8.name = "Absa Bank";
    bank8.bankId = "8";
    bank8.id = new Date().getTime() + randomInt(999);

    //
    const bank9 = new Bank();
    bank9.name = "Tyme Bank";
    bank9.bankId = "9";
    bank9.id = new Date().getTime() + randomInt(999);
    //

    //
    const bank10 = new Bank();
    bank10.name = "Investec Bank";
    bank10.bankId = "10";
    bank10.id = new Date().getTime() + randomInt(999);

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

    const resultBanks: any[] = [];
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

    const resp = new CustomResponse(200, `Created 10 banks`, resultBanks);
    return resp;
  }

  async createBank(bankDto: CreateBankDto): Promise<CustomResponse> {
    console.log(`${tag} creating bank: ${JSON.stringify(bankDto)}`);

    //create bank keys in Secrets Manager
    let clientIdKey: string;
    let clientSecretKey: string;
    let apiKeyKey: string;
    let userNameKey: string;
    let passwordKey: string;

    const bankId = `${new Date().getTime()}`;

    if (bankDto.clientId != null) {
      clientIdKey = `${bankId}_CLIENT_ID`;
      const value = bankDto.clientId;
      createSecret(clientIdKey, value);
    }
    if (bankDto.clientSecret != null) {
      clientSecretKey = `${bankId}_CLIENT_SECRET`;
      const value = bankDto.clientSecret;
      createSecret(clientSecretKey, value);
    }
    if (bankDto.password != null) {
      passwordKey = `${bankId}_PASSWORD`;
      const value = bankDto.password;
      createSecret(passwordKey, value);
    }
    if (bankDto.userName != null) {
      userNameKey = `${bankId}_USERNAME`;
      const value = bankDto.userName;
      createSecret(userNameKey, value);
    }
    if (bankDto.apiKey != null) {
      apiKeyKey = `${bankId}_API_KEY`;
      const value = bankDto.apiKey;
      createSecret(apiKeyKey, value);
    }

    const bank = new Bank();
    bank.name = bankDto.name;
    bank.bankId = bankId;
    bank.apiKeyKey = apiKeyKey;
    bank.clientIdKey = clientIdKey;
    bank.clientSecretKey = clientSecretKey;
    bank.userNameKey = userNameKey;
    bank.passwordKey = passwordKey;

    const resultBank = await this.fire.writeData("Banks", bankId, bank);

    console.log(
      `${tag} result bank, check keys: ${JSON.stringify(resultBank)}`
    );
    return new CustomResponse(200, `Created bank`, [resultBank]);;
  }

  async findAll(): Promise<CustomResponse> {
    const data = await this.fire.readAllData("Banks");
    return new CustomResponse(200, `Found ${data.length} banks`, data);
  }
  async doAllBanks(): Promise<CustomResponse> {
    return this.createSouthAfricanBanks();
  }

  async findOne(id: string) {
    return this.fire.readData("Banks", id);
  }

  async findByName(name: string) {
    return this.fire.readData('Banks', 'name');
  }

  
}
