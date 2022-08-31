import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './views/education/education.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { MenuComponent } from './views/menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SkillsComponent } from './views/skills/skills.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: '', component: MenuComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Education', component: EducationComponent },
  {path:'Home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
