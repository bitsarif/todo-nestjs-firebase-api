import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private firebaseService: FirebaseService) {}

  async create(todo: CreateTodoDto) {
    await this.firebaseService.create('todos', todo);
  }

  async findAll(): Promise<TodoDto[]> {
    const result = await this.firebaseService.findAll('todos');
    return result;
  }

  async findOne(id: string): Promise<TodoDto> {
    const result = await this.firebaseService.findOne('todos', id);
    return result;
  }

  async update(id: string, todo: Partial<UpdateTodoDto>) {
    await this.firebaseService.update('todos', id, todo);
  }

  async delete(id: string) {
    await this.firebaseService.delete('todos', id);
  }
}
