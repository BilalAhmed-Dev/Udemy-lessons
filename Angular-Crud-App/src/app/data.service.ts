import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()

export class DataService {

  private goals = new BehaviorSubject(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal: any) {
    this.goals.next(goal)
  }

}