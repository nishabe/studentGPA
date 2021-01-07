import { HttpService, Injectable } from '@nestjs/common';
import { Student } from '../student/student.service';

@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}
  async getStudent(firstName: string, lastName: string): Promise<Student> {
    const url = `../get-student?firstName=${firstName}&lastName=${lastName}`;
    const response = await this.http.get(url).toPromise();
    return response.data;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
