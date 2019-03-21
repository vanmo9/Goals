import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal(1, 'Eat', 'Pizza from pizza Mojo', new Date(2019, 5,1)),
    new Goal(2, 'Drink', 'Some Heineken', new Date(2019, 5,2)),
    new Goal(3, 'Sleep', 'In a king size bed', new Date(2019, 5,3)),
  ]
    deleteGoal(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)

            if(toDelete){
                this.goals.splice(index,1)
            }
        }
    }
    constructor() {
    }

    ngOnInit() {
    }
}
