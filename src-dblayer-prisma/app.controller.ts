import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('users')
  async getAllUsers() {
    const users = await this.databaseService.findAllUsers();
    return users;
  }
}
