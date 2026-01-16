import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { myresolverResolver } from './resolver/myresolver.resolver';

export const routes: Routes = [
    {path:'home' , component: HomeComponent, title:'home',

          children: [
            {path:'product', component: ProductsComponent, title: 'product'},
            {path:'', redirectTo:'product', pathMatch:'full'},
            {path:'user', component: UserComponent, title: 'user'}
        ] 
       //resolve: {myresole:myresolverResolver}
    },
    {path:'', redirectTo: 'home', pathMatch:'prefix'},
    //{path:'about' , component: AboutComponent, title:'about'},
    //lazy loading
    {path:'about' , loadComponent:() => import('./pages/about/about.component')
        .then((c) => c.AboutComponent), title: 'about'
    },

    {path:'blog' , loadComponent: () => import('./pages/blog/blog.component')
        .then((c) => c.BlogComponent), title:'blog'},

    { path: '**', redirectTo: 'home', pathMatch: 'full'},


];
