import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { UserService } from 'src/app/core/services/user/user.service';
import { CourseService } from 'src/app/shared/services/course/course.service';
import { Course } from 'src/app/models/course';

@Directive({
  selector: '[appUserCanBuyCourse]'
})
export class UserCanBuyCourseDirective implements OnInit {

  @Input() rootNode;
  @Input() course: Course;

  currentDisplay: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService
      .userHasCourse(this.course)
      .subscribe((res: any) =>
        this.userService
          .getUser()
          .subscribe(user => {
            if (user && user.userId !== this.course.owner.userId && !res.hasCourse) {
              this.renderer.appendChild(this.rootNode, this.element.nativeElement);
            } else {
              this.renderer.removeChild(this.rootNode, this.element.nativeElement);
            }
          })
      );
  }

}
