import { Component, HostListener, OnDestroy } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnDestroy {
  featuredProjects: Project[];
  selectedProject: Project | null = null;

  readonly skills = [
    'Angular', 'TypeScript', 'Java', 'Spring Boot',
    'React', 'Node.js', 'PostgreSQL', 'Docker', 'Git',
  ];

  constructor(private projectsService: ProjectsService) {
    this.featuredProjects = this.projectsService.getFeatured();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  openModal(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.closeModal();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedProject) this.closeModal();
  }
}
