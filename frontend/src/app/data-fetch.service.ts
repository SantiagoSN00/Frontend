import { Injectable } from '@angular/core';
import { MENU } from './fake-data/mock-menu';
import { EXPERIENCE } from './fake-data/mock-experience';
import { EDUCATION } from './fake-data/mock-education';
import { SKILLS } from './fake-data/mock-skills';
import { PROJECTS } from './fake-data/mock-projects';
import { Menu } from './views/menu/menu';
import { Skills } from './views/skills/skills';
import { Projects } from './views/projects/projects';
import { Education } from './views/education/education';
import { Experience } from './views/experience/experience';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {


  getMenu(): Menu[]{
    return MENU;
  }
  getSkills(): Skills[]{
    return SKILLS;
  }
  getProjects(): Projects[]{
    return PROJECTS;
  }
  getEducation(): Education[]{
    return EDUCATION;
  }
  getExperience(): Experience[]{
    return EXPERIENCE;
  }

  constructor() { }
}
