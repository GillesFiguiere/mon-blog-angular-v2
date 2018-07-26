import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyC553sUhA65HLTpQa51G2ugW5T7bJCAPgI",
      authDomain: "tps-openclassrooms.firebaseapp.com",
      databaseURL: "https://tps-openclassrooms.firebaseio.com",
      projectId: "tps-openclassrooms",
      storageBucket: "tps-openclassrooms.appspot.com",
      messagingSenderId: "1011596909292"
    };
    firebase.initializeApp(config);
  }
}
