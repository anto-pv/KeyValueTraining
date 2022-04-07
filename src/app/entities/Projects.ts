import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("project")
export class Project extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public projectname: string;

    @Column({ nullable: false })
    public desc: string;

    @Column({nullable : true})
    public mentor :string;
}
