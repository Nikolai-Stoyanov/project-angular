import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogFood } from '../../components/shared/models/Dog-Food';
import { Observable } from 'rxjs';

const createF = 'http://localhost:9999/feed/dogFood/create';
const editF = 'http://localhost:9999/feed/dogFood/edit/';
const getAllF = 'http://localhost:9999/feed/dogFood';
const getSingleF = 'http://localhost:9999/feed/dogFood/details/';
const deleteF = 'http://localhost:9999/feed/dogFood/delete/';

@Injectable({
  providedIn: 'root'
})
export class DogFoodService {

  constructor(private http: HttpClient) { }

  createFood(data) {
    return this.http.post(createF, data);
  }

  editFood(data,id) {
    return this.http.post(editF + id, data);
  }

  getAllFood(): Observable<Array<DogFood>> {
    return this.http.get<Array<DogFood>>(getAllF)
  }

  getFood(id): Observable<DogFood> {
    return this.http.get<DogFood>(getSingleF + id)
  }

  deleteFood(id) {
    return this.http.delete(deleteF + id)
  }
}
