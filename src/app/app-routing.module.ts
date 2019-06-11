import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./auth/login/login.component";
import { FormComponent } from "./search/form/form.component";
import { IndexComponent } from "./home/index/index.component";
import { MicroProfileComponent } from "./search/micro-profile/micro-profile.component"

const routes: Routes = [
    { path: "", redirectTo: "/index", pathMatch: "full" },
    { path: "form", component: FormComponent },
    { path: "login", component: LoginComponent},
    { path: "index", component: IndexComponent},
    { path: "micro", component: MicroProfileComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
