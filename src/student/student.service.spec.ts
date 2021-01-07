import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { ApiService } from '../api/api.service';

class ApiServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getStudent(_firstName: string, _lastName: string) {
    return {
      name: 'Jane Doe',
      grades: [3.7, 3.8, 3.9, 4.0, 3.6],
    };
  }
}

describe('StudentService', () => {
  let studentService: StudentService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService, ApiServiceProvider],
    }).compile();

    studentService = module.get<StudentService>(StudentService);
  });

  it('StudentService - should be defined', () => {
    expect(studentService).toBeDefined();
  });

  describe('getGpa', () => {
    it('should get student GPA', async () => {
      const expectedGpa = 3.8;
      const gpa = await studentService.getGpa('Jane', 'Doe');
      expect(gpa).toEqual(expectedGpa);
    });
  });
});
