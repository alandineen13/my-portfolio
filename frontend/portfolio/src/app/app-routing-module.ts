import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'projects/:id', component: ProjectDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
