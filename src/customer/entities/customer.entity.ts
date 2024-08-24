import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  isActive: boolean;

  @Column()
  createdDate: Date;

  @Column()
  updatedDate: Date;
}
