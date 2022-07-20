import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from 'src/app/services/json.service';
import { tap, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  myJSONObservable$: any;
  dataJSON: any;
  objFiltered: any;
  dataJSONFiltered: any;
  text!: any;
  filtered: boolean = false;
  resultAfterFiltering!: any;
  modifyPerson!: any;
  theObjectThatisModified!: any;
  arrayOfData: any = this.jsonService.arrayOfData;
  objectToDelete!: any;
  safeDelete: boolean = false;

  updatedataJSONArray() {
    if (this.theObjectThatisModified) {
      this.theObjectThatisModified = this.jsonService.modifyData;
      this.arrayOfData.push(this.theObjectThatisModified);
      console.log(this.arrayOfData);
    } else console.log('There is no value yet.');
  }

  updatedataJSONArrayAfterDelete() {
    this.objectToDelete = this.jsonService.deleteData;
    console.log(this.arrayOfData.indexOf(this.objectToDelete));
    this.arrayOfData.splice(this.arrayOfData.indexOf(this.objectToDelete), 1);
    this.arrayOfData.filter((item: any) => item.id != this.objectToDelete.id);
    console.log(this.arrayOfData);
  }
  modify(data: any) {
    console.log(data);
    this.jsonService.setData(data);
    this.updatedataJSONArray();
  }
  delete(data: any) {
    const response = prompt(
      `Are you sure you want to delete the user: ${data.id}:${data.name}`
    );
    const options = ['Yes', 'yes', 'y', 'Y'];
    for (let i = 0; i < options.length; i++) {
      if (response === options[i]) {
        this.safeDelete = !this.safeDelete;
      }

      if (this.safeDelete) {
        this.jsonService.setDataToDelete(data);
        this.updatedataJSONArrayAfterDelete();
        // console.log(data);
        // console.log(this.jsonService.deleteData);
        // console.log(data.id);
      }
      this.safeDelete = false;
    }
  }

  filter() {
    console.log(this.arrayOfData);
    this.filtered = true;
    // return this.dataJSON.filter((item: any) => item.name.includes(this.text));
    this.resultAfterFiltering = this.arrayOfData.filter((item: any) =>
      item.name.includes(this.text)
    );
    console.log(this.resultAfterFiltering);
  }

  constructor(private jsonService: JsonServiceService) {}
  ngOnInit(): void {
    this.arrayOfData = this.jsonService.arrayOfData;
  }
}
