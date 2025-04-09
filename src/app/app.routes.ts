import { Routes } from '@angular/router';
import { Level1Component } from './components/level-one/level-one.component';
import { Level2Component } from './components/level-two/level-two.component';
import { Level3Component } from './components/level-three/level-three.component';
import { MenuComponent } from './components/menu/menu.component';
export const routes: Routes = [
    {path:'', component: MenuComponent},
    {path:'nivel-1', component: Level1Component},
    {path:'nivel-2', component: Level2Component},
    {path:'nivel-3', component: Level3Component}

];
