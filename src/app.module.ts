import { Get, Module, Res } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mdenys',
      password: '12345678',
      database: 'ping_pong',
      entities: [],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
