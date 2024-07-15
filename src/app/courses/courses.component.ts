import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { courseservice } from '../courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  title1 = 'list of courses';
  courses;

  constructor() {
    let service = new courseservice();
    this.courses = service.getcourses();
  }
}
