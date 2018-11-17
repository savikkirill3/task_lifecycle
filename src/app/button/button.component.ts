import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  OnChanges, OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

{

  @Output() onChanged = new EventEmitter();
  change(increased:boolean) {
    this.onChanged.emit(increased);
  }

  constructor() { }
  nextId = 1;
  ngOnChanges() {this.logIt(`OnChanges`);}
  ngOnInit() {this.logIt(`OnInit`);}
  ngDoCheck() {this.logIt(`DoCheck`);}
  ngAfterContentInit() {this.logIt(`AfterContentInit`);}
  ngAfterContentChecked() {this.logIt(`AfterContentChecked`);}
  ngAfterViewInit() {this.logIt(`AfterViewInit`);}
  ngAfterViewChecked() {this.logIt(`AfterViewChecked`);}
  ngOnDestroy() {this.logIt(`OnDestroy`);}

  logIt(msg: string) {
    console.log(`#${this.nextId++} ${msg}`);
  }

}
