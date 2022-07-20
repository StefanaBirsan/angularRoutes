import { Component } from '@angular/core';
import { JsonServiceService } from './services/json.service';
import { SubjectServiceService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routesProject';
  active: boolean = true;
  myJSONObservable$: any;
  visibleError: boolean = false;
  visibleSuccess: boolean = false;
  errore: any = '';
  success: any = '';

  constructor(
    private jsonService: JsonServiceService,
    private subjectService: SubjectServiceService
  ) {}
  ngOnInit(): void {
    this.subjectService.subjectSuccess.subscribe({
      next: (value: any) => {
        this.success = value;
        // this.visibleSuccess = !this.visibleSuccess;
        // setTimeout(() => {
        //   //Make the success message invisible after few seconds
        //   this.visibleSuccess = !this.visibleSuccess;
        // }, 3500);
      },
    });
    this.subjectService.subjectError.subscribe({
      next: (value: any) => {
        this.errore = value;
        // this.visibleError = !this.visibleError;
        // setTimeout(() => {
        //   //Make the error message invisibleError after few seconds
        //   this.visibleError = !this.visibleError;
        // }, 3500);
      },
    });

    this.myJSONObservable$ = this.jsonService
      .getDataFromServer()
      .subscribe((data) => {
        this.jsonService.saveArray(data);
      });
  }
}
