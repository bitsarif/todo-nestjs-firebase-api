import { OmitType, PartialType } from '@nestjs/swagger';
import { Todo } from '../models/todo';

export class UpdateTodoDto extends PartialType(OmitType(Todo, ['id'])) { }
