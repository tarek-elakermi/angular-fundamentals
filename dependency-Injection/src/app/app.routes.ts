import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
{path:'home' , component: HomeComponent, title:'home',
       //resolve: {myresole:myresolverResolver}
    },
    {path:'', redirectTo: 'home', pathMatch:'prefix'},
    //{path:'about' , component: AboutComponent, title:'about'},
    //lazy loading
    {path:'about' , loadComponent:() => import('./components/about/about.component')
        .then((c) => c.AboutComponent), title: 'about'
    },

    {path:'blog' , loadComponent: () => import('./components/blog/blog.component')
        .then((c) => c.BlogComponent), title:'blog'},

    { path: '**', redirectTo: 'home', pathMatch: 'full'},


];
