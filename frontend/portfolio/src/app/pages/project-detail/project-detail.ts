import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit, OnDestroy {
  project?: Project;
  activeScreenshot = 0;
  lightboxOpen = false;
  lightboxIndex = 0;
  erdLightboxOpen = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = this.projectsService.getById(id);
      if (!this.project) this.router.navigate(['/projects']);
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  selectScreenshot(index: number) {
    this.activeScreenshot = index;
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  openErdLightbox() {
    this.erdLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeErdLightbox() {
    this.erdLightboxOpen = false;
    document.body.style.overflow = '';
  }

  lightboxPrev() {
    if (this.project) {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.project.screenshots.length) % this.project.screenshots.length;
    }
  }

  lightboxNext() {
    if (this.project) {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.project.screenshots.length;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.erdLightboxOpen) {
      if (event.key === 'Escape') this.closeErdLightbox();
      return;
    }
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.lightboxPrev();
    if (event.key === 'ArrowRight') this.lightboxNext();
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
