import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bankId: string;

  @Column()
  name: string;

  @Column()
  clientIdKey: string;

  @Column()
  clientSecretKey: string;

  @Column()
  userNameKey: string;

  @Column()
  passwordKey: string;

  @Column()
  apiKeyKey: string;
}
