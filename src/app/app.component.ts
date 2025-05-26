import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {HeaderComponent} from './header/header.component';
import {ProjectComponent} from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,SkillsComponent, HeaderComponent,ProjectComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
