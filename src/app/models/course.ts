import { Author } from './author';

export class Course {

  id: number;
  name: string;
  description: string;
  creationDate: Date;
  author: Author;
  status: string;

  constructor() {
    this.author = new Author();
  }

  static mockCourse() {
    const course = new Course();
    course.id = Number.parseInt((Math.random() * 100).toFixed(0), 0);
    course.name = `Curso 0${course.id}`;
    course.description = 'AAAAAAAAAAAAAAAAAAAAA';
    course.creationDate = new Date();
    course.author.id = Math.random() * 100;
    course.author.name = 'Nome';
    course.status = "Show";

    return course;
  }

}
