// src/codes/entities/code-group.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
// import { Code } from './code.entity';

@Entity('code_groups')
export class CodeGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  groupCode: string;  // 'ARTICLE_CATEGORY', 'ALARM_TYPE'

  @Column({ type: 'varchar', length: 100 })
  groupName: string;  // '기사 카테고리', '알림 타입'

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'char', length: 1, default: 'Y' })
  useYn: string;  // 'Y' or 'N'

  @Column({ type: 'int', default: 0 })
  sortOrder: number;

//   @OneToMany(() => Code, (code) => code.group)
//   codes: Code[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}