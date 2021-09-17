import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { SensitiveType } from '../constants';

// to 写入数据库
// from 从数据库读取
const dataTransform = {
    to: (value: any) => JSON.stringify(value || {}),
    from: (value: any) => JSON.parse(value)
}

@Entity()
export class Sensitive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: SensitiveType })
  type: string;

  @Column({ type: 'varchar' })
  pathname: string;

  @Column({ type: 'text', transformer: dataTransform })
  parameters: any;

  @Column({ type: 'text', transformer: dataTransform })
  results: any;

  @CreateDateColumn()
  createDate: Date;
}