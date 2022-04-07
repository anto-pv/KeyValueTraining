import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("role")
export class Role extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public rolename: string;

    @Column({ nullable: true })
    public department: string;

    @Column({nullable : true})
    public salary :number;
}
