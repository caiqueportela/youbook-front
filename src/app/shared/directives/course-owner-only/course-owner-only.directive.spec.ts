import { CourseOwnerOnlyDirective } from './course-owner-only.directive';

describe('CourseOwnerOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new CourseOwnerOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
