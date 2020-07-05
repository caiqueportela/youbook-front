import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';

import { Course } from 'src/app/models/course';
import { Chapter } from 'src/app/models/chapter';
import { Activity } from 'src/app/models/activity';
import { CourseUser } from 'src/app/models/course-user';
import { ActivityComment } from 'src/app/models/activity-comment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  listPaginated(page: number): Observable<Course[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/courses`, { params })
      .pipe(
        map((response: any) =>
          response.items as Course[]
        )
      );
  }

  retrieveCourse(courseId: number): Observable<Course> {
    return this.http
      .get<Course>(`${API_URL}/api/course/${courseId}`);
  }

  createCourse(formData: any) {
    return this.http
      .post(`${API_URL}/api/course`, formData);
  }

  updateCourse(course: Course, formData: any) {
    return this.http
      .patch(`${API_URL}/api/course/${course.courseId}`, formData);
  }

  deleteCourse(course: Course) {
    return this.http
      .delete(`${API_URL}/api/course/${course.courseId}`);
  }

  retrieveChapter(courseId: number, chapterId: number): Observable<Chapter> {
    return this.http
      .get<Chapter>(`${API_URL}/api/course/${courseId}/chapter/${chapterId}`);
  }

  createChapter(courseId: number, formData: any) {
    return this.http
      .post(`${API_URL}/api/course/${courseId}/chapter`, formData);
  }

  updateChapter(courseId: number, chapterId: number, formData: any) {
    return this.http
      .patch(`${API_URL}/api/course/${courseId}/chapter/${chapterId}`, formData);
  }

  deleteChapter(courseId: number, chapterId: number) {
    return this.http
      .delete(`${API_URL}/api/course/${courseId}/chapter/${chapterId}`);
  }

  retrieveActivity(courseId: number, chapterId: number, activityId: number): Observable<Activity> {
    return this.http
      .get<Activity>(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}`);
  }

  createActivity(courseId: number, chapterId: number, formData: any) {
    return this.http
      .post(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity`, formData);
  }

  updateActivity(courseId: number, chapterId: number, activityId: number, formData: any) {
    return this.http
      .patch(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}`, formData);
  }

  deleteActivity(courseId: number, chapterId: number, activityId: number) {
    return this.http
      .delete(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}`);
  }

  listPurshasedPaginated(page: number): Observable<CourseUser[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/courses/purchased`, { params })
      .pipe(
        map((response: any) =>
          response.items as CourseUser[]
        )
      );
  }

  userHasCourse(course: Course) {
    return this.http
      .get(`${API_URL}/api/course/${course.courseId}/canAccess`);
  }

  buyCourse(course: Course) {
    return this.http
      .post(`${API_URL}/api/course/${course.courseId}/purchase`, {});
  }

  markViewActivity(courseId: number, chapterId: number, activityId: number) {
    return this.http
      .post(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/view`, {});
  }

  concludeCourse(courseId: number) {
    return this.http
      .post(`${API_URL}/api/course/${courseId}/conclude`, {});
  }

  getCommentsPaginated(courseId: number, chapterId: number, activityId: number, page: number = 1): Observable<ActivityComment[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/comments`, { params })
      .pipe(
        map((response: any) =>
          response.items as ActivityComment[]
        )
      );
  }

  createComment(courseId: number, chapterId: number, activityId: number, message: any) {
    return this.http
      .post(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/comment`, message);
  }

  retrieveComment(courseId: number, chapterId: number, activityId: number, commentId: number): Observable<ActivityComment> {
    return this.http
      .get<ActivityComment>(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/comment/${commentId}`);
  }

  deleteComment(courseId: number, chapterId: number, activityId: number, comment: ActivityComment) {
    return this.http
      .delete(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/comment/${comment.commentId}`);
  }

  updateComment(courseId: number, chapterId: number, activityId: number, comment: ActivityComment, message: any) {
    return this.http
      .patch(`${API_URL}/api/course/${courseId}/chapter/${chapterId}/activity/${activityId}/comment/${comment.commentId}`, message);
  }

}
