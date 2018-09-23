import {RouterModule, Routes} from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { WorkComponent } from './work/work.component';


const APP_ROUTES : Routes =[
    {path:'intro', component: IntroComponent},
    {path:'work', component: WorkComponent},        
    {path:'**', pathMatch:'full', redirectTo:'intro'}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES, {useHash:true});