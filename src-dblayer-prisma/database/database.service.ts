import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User as UserModel } from '@prisma/client';

@Injectable()
export class DatabaseService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<UserModel[]> {
    // Implement your logic here, using the `prisma` instance
    const users = await this.prisma.user.findMany();
    return users;
  }
  // Implement your database-independent methods here
}
