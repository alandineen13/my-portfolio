import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  allProjects: Project[];

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
  ) {
    this.allProjects = this.projectsService.getAll();
  }

  openProject(project: Project) {
    this.router.navigate(['/projects', project.id]);
  }
}
