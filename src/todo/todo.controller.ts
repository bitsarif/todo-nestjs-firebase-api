import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { TodoDto } from './dto/todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiOperation({ summary: 'Get all todos' })
  @ApiResponse({
    status: 200,
    description: 'Return all todos.',
    type: CreateTodoDto,
    isArray: true,
  })
  @Get()
  async findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @ApiOperation({ summary: 'Get a todo by id' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'Return a todo by id.',
    type: TodoDto,
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TodoDto> {
    return this.todoService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a todo' })
  @ApiBody({ type: CreateTodoDto })
  @Post()
  async create(@Body() todo: CreateTodoDto): Promise<void> {
    this.todoService.create(todo);
  }

  @ApiOperation({ summary: 'Update a todo by id' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiBody({ type: UpdateTodoDto })
  @Put(':id')
  async update(@Param('id') id: string, @Body() todo: UpdateTodoDto): Promise<void> {
    this.todoService.update(id, todo);
  }

  @ApiOperation({ summary: 'Delete a todo by id' })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ status: 200, description: 'Todo deleted successfully.' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    this.todoService.delete(id);
  }
}
