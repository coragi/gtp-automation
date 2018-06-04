import { Component } from '@angular/core';
import { PredictiveService} from './predictive.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	constructor(private predictiveService: PredictiveService) {

	}
	private prediction: number = 0;

	callPredictiveModel(valor) {
		console.log('valor', valor.value);
		this.predictiveService.callModel('ok')
		.subscribe( data => {
			this.prediction = data['prediction'];
			console.log(this.prediction);
		});
	}
}
