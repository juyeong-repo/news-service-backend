import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // 환경변수 설정 (.env 파일 읽기)
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 접근 가능
    }),
    
    // TypeORM 설정
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 환경에서만 true! 배포시 false로 변경
      logging: true, // SQL 쿼리 로그 출력
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}