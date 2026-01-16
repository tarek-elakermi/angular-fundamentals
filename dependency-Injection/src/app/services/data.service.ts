import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoot } from '../env/apiRoute';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName: string = 'user tarek';

   /*
  https://jsonplaceholder.typicode.com
   */

  constructor(private _httpClient: HttpClient) { }

   doGet(): Observable<any> {
    return this._httpClient.get(`${apiRoot}/posts`);
  }

  doGetByParams(): Observable<any>  {
    return this._httpClient.get(`${apiRoot}/comments`,{params: {postId:2}});
  }

  doCreate(): Observable<any> {
    return this._httpClient.post(`${apiRoot}/posts`, {
      title: 'title 1',
      body: 'body 1',
      userId: 1,
    });
  }

  doUpdate(): Observable<any> {
    return this._httpClient.put(`${apiRoot}/posts/1`, {
      id: 1,
      title: 'update title 1',
      body: 'update body 1',
      userId: 1,
    })
  }

  doPatch(): Observable<any> {
    return this._httpClient.patch(`${apiRoot}/posts/1`, {
      title: 'patch title 1',
      body: 'patch body 1'
    })
  }

  doDelete(): Observable<any> {
    return this._httpClient.delete(`${apiRoot}/posts/1`);
  }











}
