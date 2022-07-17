import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Todo } from './entities/todo';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
