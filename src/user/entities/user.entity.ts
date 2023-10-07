import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // auto increment
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
}
