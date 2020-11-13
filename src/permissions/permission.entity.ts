import { Role } from '../roles/role.entity';
import { Entity, ObjectIdColumn, ObjectID, Column, ManyToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('permissions')
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    //Relation
    @ManyToMany(() => Role, role => role.permissions)
    role: Role[]
}