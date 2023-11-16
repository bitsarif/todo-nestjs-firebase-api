import { OmitType } from "@nestjs/swagger";
import { Todo } from "../models/todo";

export class CreateTodoDto extends OmitType(Todo, ['id']) {}