import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectServiceService {
  subjectError = new Subject();
  updateSubjectError(err: any) {
    this.subjectError.next(err);
  }
  subjectSuccess = new Subject();
  updateSubjectSuccess(success: any) {
    this.subjectSuccess.next(success);
  }
  constructor() {}
}
