import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('articles')
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column ({type: 'varchar', length: 500}) //default: not null
    title: string;

    @Column ({type: 'text', nullable: true})
    content: string;

    @Column ({type: 'varchar', length: 100, nullable: true})
    source: string;

    @Column({ type: 'varchar', length: 500, unique: true })
    url: string;
    
    /**
    * 카테고리- 전체, 속보, 정보, 분석, 경제지표, 일정.. 
    */

    // @Column ({type: 'varchar', length: 500})
    // category: string; 

    // @ManyToOne(() => Code)
    // @JoinColumn({ name: 'category_code_id' })
    // category: Code;
  
    // @ManyToMany(() => Keyword, (keyword) => keyword.articles)
    // @JoinTable({
    //   name: 'article_keywords',
    //   joinColumn: { name: 'article_id', referencedColumnName: 'id' },
    //   inverseJoinColumn: { name: 'keyword_id', referencedColumnName: 'id' }
    // })
    // keywords: Keyword[];

    @Column({ type: 'datetime', nullable: true })
    publishedAt: Date;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    

}