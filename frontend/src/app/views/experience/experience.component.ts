import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data-fetch.service';
import { Experience } from './experience';
import {CdkDragDrop, moveItemInArray,DragDropModule } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';



@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  experience: Experience[] = []
  edits:boolean[];
  add:boolean = false;
  minDate:Date;
  maxDate:Date;

  setMaxDate(args){
    this.maxDate = args;

  }
  setMinDate(args){
    this.minDate = args;
  }
  
  addNew(){
    this.add = !this.add;
  }

  delete(args):void {
    args.stopPropagation();
    let liItem = args.target.parentElement.parentElement;
    let index = liItem.dataset.index;
    if (index !== -1) {
      this.experience.splice(index, 1);
  } 
  }

  editFn(args):void{
    let liItem = args.target.parentElement.parentElement.parentElement;
    let index = liItem.dataset.index;
    this.edits[index] = !this.edits[index];
    console.log(this.edits[index]);
    console.log(this.edits);
    this.form = this.fb.group({
      name: [this.experience[index].title, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      body: [this.experience[index].body, [Validators.required, Validators.minLength(1),Validators.maxLength(500)]],
      start: [this.experience[index].start, [Validators.required]],
      end: [this.experience[index].end],
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.experience, event.previousIndex, event.currentIndex);
    console.log(this.experience)
  }

  getExperience(): void {
    this.experience = this.dataFetchService.getExperience();
  }
  constructor(private dataFetchService: DataFetchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getExperience();
    this.edits = new Array(this.experience.length).fill(false);


    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      body: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(500)]],
      start: [null, [Validators.required]],
      end: [null],
    });

  }

  saveDetails(form: any,e) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    console.log((form.value))
    console.log(e.target.parentElement);
    let index = e.target.parentElement.dataset.index;
    if(index){
      console.log("LOL", form.value.name)
      this.experience[index].title = form.value.name;
      this.experience[index].body = form.value.body;
      this.experience[index].start = form.value.start;
      this.experience[index].end = form.value.end;
      this.edits[index] = !this.edits[index];
      console.log(this.experience)
    }
    else{
      const exp: Experience = {title:form.value.name,body:form.value.body,start:form.value.start,end:form.value.end};
      this.experience.push(exp);
      this.add = !this.add
    }
    this.form.reset();
    
  }

}
