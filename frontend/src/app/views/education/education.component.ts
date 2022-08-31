import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataFetchService } from 'src/app/data-fetch.service';
import { Education } from './education';
import {CdkDragDrop, moveItemInArray,DragDropModule } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  education: Education[] = []
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
      this.education.splice(index, 1);
  } 
  }

  editFn(args):void{
    let liItem = args.target.parentElement.parentElement.parentElement;
    let index = liItem.dataset.index;
    this.edits[index] = !this.edits[index];
    console.log(this.edits[index]);
    console.log(this.edits);

  }

  getEducation(): void {
    this.education = this.dataFetchService.getEducation();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.education, event.previousIndex, event.currentIndex);
    console.log(this.education)
  }
  constructor(private dataFetchService: DataFetchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.minDate)
    this.getEducation();
    this.edits = new Array(this.education.length).fill(false);
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      start: [null, [Validators.required]],
      end: [null, [Validators.required]],
    });
  }

  saveDetails(form: any,e) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    console.log((form.value))
    console.log(e.target.parentElement);
    let index = e.target.parentElement.dataset.index;
    if(index){
      console.log("LOL", form.value.name)
      this.education[index].title = form.value.name;
      this.education[index].start = form.value.start;
      this.education[index].end = form.value.end;
      this.edits[index] = !this.edits[index];
      this.form.reset();
      console.log(this.education)
    }
    else{
      const edu: Education = {title:form.value.name,start:form.value.start,end:form.value.end};
      this.education.push(edu);
      this.add = !this.add
      this.form.reset();
    }
    
  }
}
