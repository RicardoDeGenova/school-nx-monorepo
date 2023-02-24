import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ScheduleComponent } from "./schedule.component";

const routes: Route[] = [
    {
      path: '',
      pathMatch: 'full',
      component: ScheduleComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }