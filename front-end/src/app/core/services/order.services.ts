import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogFood } from '../../components/shared/models/Dog-Food';
import { Observable } from 'rxjs';

const createF='http://localhost:9999/dogFood/create';
const getAllF='http://localhost:9999/dogFood/all';
const getSingleF='http://localhost:9999/dogFood/details/';
const deleteF='http://localhost:9999/dogFood/delete/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  
  constructor(private http:HttpClient) { }

  createFurniture(data){
    return this.http.post(createF, data);
  }

  getAllFurniture():Observable<Array<DogFood>>{
    return this.http.get<Array<DogFood>>(getAllF)
  }

  getFurniture(id):Observable<DogFood>{
    return this.http.get<DogFood>(getSingleF + id)
  }

deleteFurniture(id){
    return this.http.delete(deleteF + id)
  }
}