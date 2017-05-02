import {RouterModule, Routes} from "@angular/router";
import {RecipeCreateComponent} from "./recipe-create/recipe-create.component";
import {RecipeOverviewComponent} from "./recipe-overview/recipe-overview.component";

const APP_ROUTES: Routes = [
  {path: 'overview', component: RecipeOverviewComponent},
  {path: 'create', component: RecipeCreateComponent},
  {path: '**', redirectTo: 'overview'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);