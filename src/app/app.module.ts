import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CdkTableModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
