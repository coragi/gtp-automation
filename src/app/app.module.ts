import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PredictiveService } from './predictive.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [PredictiveService],
	bootstrap: [AppComponent]
})
export class AppModule { }
