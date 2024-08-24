import { Inject, Injectable } from "@nestjs/common";
import { CreateBankDto } from "./dto/create-bank.dto";
import { UpdateBankDto } from "./dto/update-bank.dto";
import { Bank } from "./entities/bank.entity";
import { Repository } from "typeorm";
import { createSecret } from "src/utils/secrets";
const tag = "🦠🦠🦠 BankService 🦠";

@Injectable()
export class BankService {
  constructor(
    @Inject()
    private bankRepository: Repository<Bank>
  ) {}
  async createBank(bankDto: CreateBankDto): Promise<Bank> {
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

    const resultBank = await this.bankRepository.save(bank);

    console.log(
      `${tag} result bank, check keys: ${JSON.stringify(resultBank)}`
    );
    return resultBank;
  }

  async findAll() {
    return this.bankRepository.find();
  }

  async findOne(id: number) {
    return this.bankRepository.findOne({ where: { id: id } });
  }

  async findByName(name: string) {
    return this.bankRepository.findOne({ where: { name: name } });
  }

  async update(id: number, updateBankDto: UpdateBankDto) {
    return this.bankRepository.update(id, updateBankDto);
  }

  remove(id: number) {
    return this.bankRepository.delete(id);
  }
}
