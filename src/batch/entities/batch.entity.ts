import { Transaction } from "src/transaction/entities/transaction.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Batch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch_id: string;

  @Column()
  branch_code: string;

  @Column()
  batch_date: string;

  @Column()
  operator_name: string;

  @Column()
  sub_total: number;

  @Column()
  discount: number;

  @Column()
  total: number;

  @Column()
  posted: boolean;

  @OneToMany(() => Transaction, (transaction) => transaction.batch)
  transactions: Transaction[];
}
