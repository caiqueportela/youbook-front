import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

import { Course } from 'src/app/models/course';
import { UserService } from 'src/app/core/services/user/user.service';

@Directive({
  selector: '[appCourseOwnerOnly]'
})
export class CourseOwnerOnlyDirective implements OnInit {

  @Input() ownedCourse: Course;
  @Input() rootNode;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.userId !== this.ownedCourse.owner.userId){
        this.renderer.removeChild(this.rootNode, this.element.nativeElement);
      }
    });
  }

}
