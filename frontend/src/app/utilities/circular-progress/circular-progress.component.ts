import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit {

  @Input() value:number = 0;
  @Input() type ?: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.value>100){
      this.value = 100;
    }
  }

}
