import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../app/providers/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: any = [];
  task: any = {
    name: '',
    description: '',
  };
  editTask: any = {
    _id: '',
    name: '',
    description: '',
  };
  isTable: boolean = true;
  isAdd: boolean = false;
  isEdit: boolean = false;
  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  addTask() {
    this._taskService.addTask(this.task).subscribe((data) => {
      const result = data;
      if (result.code) {
        this.getTasks();
        this.isTable = !this.isTable;
        this.isAdd = !this.isAdd;
      } else {
        this.isTable = !this.isTable;
        this.isAdd = !this.isAdd;
      }
    });
  }

  getTasks() {
    this._taskService.getTasks().subscribe(
      (res) => {
        const result = res;
        if (result.code) {
          this.tasks = result.data;
        } else {
          this.tasks = [];
        }
      },
      (err) => {
        console.log(err, 'getTasks');
      }
    );
  }

  deleteTask(id: any) {
    this._taskService.deleteTask(id).subscribe(
      (res) => {
        console.log(res);
        this.getTasks();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showEditForm(task: any) {
    this.isEdit = !this.isEdit;
    this.isTable = !this.isTable;
    this.editTask = {
      _id: task._id,
      name: task.name,
      description: task.description,
    };
  }

  updateTask() {
    this._taskService.updatetask(this.editTask).subscribe(
      (data) => {
        const result = data;
        if (result.code) {
          this.getTasks();
          this.isTable = !this.isTable;
          this.isEdit = !this.isEdit;
        } else {
          this.isTable = !this.isTable;
          this.isEdit = !this.isEdit;
        }
      },
      (error) => {
        console.log(error, 'updateTask()');
      }
    );
  }
}
