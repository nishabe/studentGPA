import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { ApiService } from './api/api.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, StudentService, ApiService],
})
export class AppModule {}
