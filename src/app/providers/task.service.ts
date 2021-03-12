import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { response } from './response';
const uri = environment.uri;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private _http: HttpClient) {}

  addTask(task: any) {
    return this._http.post<response>(uri + '/tasks', task);
  }

  getTasks() {
    return this._http.get<response>(uri + '/tasks');
  }

  deleteTask(taskId: any) {
    return this._http.delete<response>(uri + '/tasks/' + taskId);
  }

  updatetask(obj:any){
    return this._http.put<response>(uri + '/tasks/' ,obj);

  }
}
