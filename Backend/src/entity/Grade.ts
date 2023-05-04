import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { Wilder } from "./Wilder";
import { Skill } from "./Skill"

@Entity()
export class Grade {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public wilderId: number;

    @Column()
    public grade: number;

    @Column()
    public skillId: number;

    @ManyToOne(() => Wilder, (wilder) => wilder.grades)
    public wilder: Wilder;

    @ManyToOne(() => Skill, (skill) => skill.grades)
    public skill: Skill;
}