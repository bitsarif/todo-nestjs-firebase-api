import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { FirebaseService } from '../firebase/firebase.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService, FirebaseService],
})
export class TodoModule {}
