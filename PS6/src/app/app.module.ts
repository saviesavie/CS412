import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ParentAComponent } from './parents/parent-a/parent-a.component';
import { ChildAComponent } from './children/child-a/child-a.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ParentAComponent,
    ChildAComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
