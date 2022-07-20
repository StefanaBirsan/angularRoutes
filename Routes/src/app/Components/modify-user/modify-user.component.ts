import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from 'src/app/services/json.service';
import { SubjectServiceService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
})
export class ModifyUserComponent implements OnInit {
  modifyDataPage = this.jsonService.modifyData;
  nameChanged!: any;
  result: boolean = false;
  arrayOfData: any = this.jsonService.arrayOfData;
  succesfullMessage!: string;
  visible: boolean = false;

  /*Exercice no 5.*/
  theObjectThatIWantToModify: any = this.jsonService.modifyData;
  saveChanges() {
    this.result = true;
    const obj: any = {
      id: this.theObjectThatIWantToModify.id,
      name: this.theObjectThatIWantToModify.name,
      surname: this.theObjectThatIWantToModify.username,
      email: this.theObjectThatIWantToModify.email,
      website: this.theObjectThatIWantToModify.website,
      phone: this.theObjectThatIWantToModify.phone,
    };
    this.jsonService.modifyData = obj;

    //The arrayOfData is taken from the services,
    // map over it and replace the person that matches a specific condition
    this.arrayOfData.map((item: any) => {
      if (item.id === obj.id) {
        this.subjectSerice.updateSubjectSuccess('User updated with success');
        //Make the success message visible

        this.visible = !this.visible;
        setTimeout(() => {
          //Make the success message invisible after few seconds
          this.visible = !this.visible;
        }, 2500);
        item = obj;
      }
    });
    // this.arrayOfData.push(obj);
    console.log(this.jsonService.modifyData);
    console.log(this.jsonService.arrayOfData);
  }

  constructor(
    private jsonService: JsonServiceService,
    private subjectSerice: SubjectServiceService
  ) {}

  ngOnInit(): void {}
}
