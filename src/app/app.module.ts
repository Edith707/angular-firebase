import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//firebase
import { AngularFireModule} from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

//envioronment config
import { environment } from "../environments/environment";

//Components
import { TodoComponent } from './component/todo/todo.component';

// Services

import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
     TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
