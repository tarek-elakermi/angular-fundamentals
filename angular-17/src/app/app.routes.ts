import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent },
    {path:'cart', component: CartComponent},
    {path:'blog', component: BlogComponent}
];
