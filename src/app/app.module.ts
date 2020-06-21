import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { MyListComponent } from './my-list/my-list.component';
import { SomeComponent } from './some/some.component';
import { InputComponent } from './input/input.component';
import { InputReceiverComponent } from './input-receiver/input-receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    MyListComponent,
    SomeComponent,
    InputComponent,
    InputReceiverComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
