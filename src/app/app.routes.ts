import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
    {path:'',component:NewsComponent,title:'Latest News'},
    {path:'about',component:AboutComponent,title:'About News App'},
    {path:':type/:str',component:NewsComponent,title:'Latest News'},

];
