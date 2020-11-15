import { Role } from '../roles/role.entity';
import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { IsEmail, IsOptional } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  dayOfBirth: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  roleId: number;

  @BeforeUpdate()
  @BeforeInsert()
  hashPwd() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  @ManyToOne(() => Role)
  role: Role;
}
