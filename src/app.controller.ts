import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';

@Controller('student')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly studentService: StudentService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/gpa')
  async getStudentGpa(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
  ): Promise<number> {
    if (!firstName || !lastName) {
      throw new HttpException('Incomplete student information', 400);
    }
    return await this.studentService.getGpa(firstName, lastName);
  }
}
