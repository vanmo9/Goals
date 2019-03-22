import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'Eat', 'pizza', new Date(2019, 5, 1)),
    new Goal(2, 'Drink', 'saft', new Date(2019, 4, 2)),
    new Goal(3, 'code', 'angular', new Date(2019, 6, 3)),
    new Goal(3, 'Sleep', 'well', new Date(2019, 7, 6)),
  ]
  toogleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() {
  }

  ngOnInit() {
  }
}
