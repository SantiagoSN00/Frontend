import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data-fetch.service';
import { Skills } from './skills';
import {CdkDragDrop, moveItemInArray,DragDropModule } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  skills: Skills[] = []
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
      this.skills.splice(index, 1);
  } 
  }

  editFn(args):void{
    let liItem = args.target.parentElement.parentElement.parentElement;
    let index = liItem.dataset.index;
    this.edits[index] = !this.edits[index];
    console.log(this.edits[index]);
    console.log(this.edits);
    this.form = this.fb.group({
      name: [this.skills[index].title, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      value: [this.skills[index].value, [Validators.required, Validators.min(1),Validators.max(100)]],
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
    console.log(this.skills)
  }

  getSkills(): void {
    this.skills = this.dataFetchService.getSkills();
  }
  constructor(private dataFetchService: DataFetchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getSkills();
    this.edits = new Array(this.skills.length).fill(false);
    
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      value: [null, [Validators.required, Validators.min(1),Validators.max(100)]],
    });

  }

  saveDetails(form: any,e) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    console.log((form.value))
    console.log(e.target.parentElement);
    let index = e.target.parentElement.dataset.index;
    if(index){
      console.log("LOL", form.value.name)
      this.skills[index].title = form.value.name;
      this.skills[index].value = form.value.value;
      this.edits[index] = !this.edits[index];
      console.log(this.skills)
    }
    else{
      const skill: Skills = {title:form.value.name,value:form.value.value};
      this.skills.push(skill);
      this.add = !this.add
    }

    this.form.reset();
    
  }

}
