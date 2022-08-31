import { Component, OnInit } from '@angular/core';
import { DataFetchService } from 'src/app/data-fetch.service';
import { Projects } from './projects';
import {CdkDragDrop, moveItemInArray,DragDropModule } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = []
  form: FormGroup = new FormGroup({});
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
      this.projects.splice(index, 1);
  } 
  }

  editFn(args):void{
    let liItem = args.target.parentElement.parentElement.parentElement;
    let index = liItem.dataset.index;
    this.edits[index] = !this.edits[index];
    console.log(this.edits[index]);
    console.log(this.edits);

    this.form = this.fb.group({
      name: [this.projects[index].title, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      link: [this.projects[index].link, [Validators.required, Validators.min(1),Validators.max(100)]],
      body: [this.projects[index].body, [Validators.required]],
      finished: [this.projects[index].result, [Validators.required]],

    });
    console.log(this.form.value.finished);

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    console.log(this.projects)
  }

  getProjects(): void {
    this.projects = this.dataFetchService.getProjects();
  }
  constructor(private dataFetchService: DataFetchService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.getProjects();
    this.edits = new Array(this.projects.length).fill(false);

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
      link: [null, [Validators.required, Validators.min(1),Validators.max(100)]],
      body: [null, [Validators.required]],
      finished: [null, [Validators.required]],

    });

  }
  saveDetails(form: any,e) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    console.log((form.value))
    console.log(e.target.parentElement);
    let index = e.target.parentElement.dataset.index;
    if(index){
      console.log("LOL", form.value.name)
      this.projects[index].title = form.value.name;
      this.projects[index].link = form.value.link;
      this.projects[index].body = form.value.body;
      this.projects[index].result = form.value.finished;
      this.edits[index] = !this.edits[index];
      console.log(this.projects)
      this.form.reset();
    }
    else{
      const proj: Projects = {title:form.value.name,body:form.value.body,link:form.value.link,result:form.value.finished};
      this.projects.push(proj);
      this.add = !this.add
      this.form.reset();
    }
    
  }
}
