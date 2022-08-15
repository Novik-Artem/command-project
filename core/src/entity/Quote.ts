import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("quotes")
export class Quote extends BaseEntity {
  @PrimaryGeneratedColumn()
  quote_id: number;

  @Column()
  quote: string;

  @Column()
  author: string;
}