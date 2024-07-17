import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
  private API = '../assets/data.json'; // Replace with your API URL
  constructor(private http: HttpClient) { }

  getCarImages(): Observable<any> {
    return this.http.get<any>(this.API);
}
