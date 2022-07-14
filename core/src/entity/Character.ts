import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("characters")
export class Character extends BaseEntity {
  @PrimaryGeneratedColumn()
  char_id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column("simple-array")
  occupation: string[];

  @Column()
  img: string;

  @Column()
  status: string;

  @Column()
  nickname: string;
}
