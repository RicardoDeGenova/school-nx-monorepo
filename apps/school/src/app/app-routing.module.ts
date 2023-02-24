import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const routes: Route[] = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'login',
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./login/login.module').then((m) => m.LoginModule),
    },
    {
      path: 'schedule',
      loadChildren: () =>
        import('./schedule/schedule.module').then((m) => m.ScheduleModule),
    },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }