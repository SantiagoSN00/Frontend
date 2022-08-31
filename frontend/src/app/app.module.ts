import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbNavConfig} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './views/menu/menu.component';
import { LoginComponent } from './views/login/login.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { EducationComponent } from './views/education/education.component';
import { SkillsComponent } from './views/skills/skills.component';
import { CircularProgressComponent } from './utilities/circular-progress/circular-progress.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RegisterComponent } from './views/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatRadioModule} from '@angular/material/radio'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    SkillsComponent,
    CircularProgressComponent,
    RegisterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [NgbNavConfig, CookieService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
