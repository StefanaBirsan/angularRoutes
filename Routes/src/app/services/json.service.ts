import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonServiceService {
  myJSONObservable$: any;
  modifyData = [];
  arrayOfData = [];
  deleteData = [];
  setDataToDelete(data: any) {
    this.deleteData = data;
  }
  setData(data: any) {
    this.modifyData = data;
  }
  saveArray(data: any) {
    this.arrayOfData = data;
    console.log(this.arrayOfData);
  }
  getDataFromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((userList: any) => {
        return userList.map((user: any) => {
          const newUser = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
          };
          return newUser;
        });
      })
      //PIPING-Look it up!!!
      // tap(console.log)
      //Check Tap
      //This is used just to see what you have filtered out of you dataServer
    );
  }
  constructor(private http: HttpClient) {}
}
