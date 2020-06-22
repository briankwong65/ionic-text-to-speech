import { Component } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  ttsText:any="";
  constructor(public tts:TextToSpeech) {

  }
  TestTTS(){
    this.tts.speak({
      text: this.ttsText,
      locale: 'yue-CHN',
      rate: 0.75
    })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }
}
