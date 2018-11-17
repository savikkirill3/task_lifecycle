import { Component } from '@angular/core';
import {Skill} from "./skill";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  count = 0;
  count1 = 0;
  count2 = 0;
  skills:Skill[] = [
    {skill: 'Сoncentration', level: this.count},
    {skill:' Teamwork', level: this.count1},
    {skill: 'Sociable', level: this.count2}
  ];

  onChanged(increased:boolean, i){
    increased==true?this.skills[i].level++:this.skills[i].level--;
    increased==true?this.sum++:this.sum--;
  }

  sum = this.count + this.count1 + this.count2;

}
