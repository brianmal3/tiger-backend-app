import { Batch } from "src/batch/entities/batch.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  transaction_id: string;

  @Column()
  booking_date: string;

  @Column()
  value_date: string;

  @Column()
  remittance_info: string;

  @Column()
  reference: string;

  @Column()
  discount: number;

  @Column()
  amount: number;

  @Column()
  posted: boolean;

  @Column()
  credit_debit_indicator: string;

  // Foreign key definition
  @Column()
  batch_id: number;

  @ManyToOne(() => Batch, (batch) => batch.transactions)
  batch: Batch;

  
}
