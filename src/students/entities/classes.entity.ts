import { Entity, JoinColumn, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Student } from './students.entity';

@Entity()
export class Classes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  className: string;

  @OneToMany(() => Student, student => student.class)
  students: Student[]

  @UpdateDateColumn()
  updateDate: Date;

  @CreateDateColumn()
  createDate: Date;
}