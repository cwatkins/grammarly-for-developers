import { Component, OnInit } from '@angular/core';
import { init, EditorConfig } from '@grammarly/editor-sdk';
import { demoClientId, demoText } from 'src/demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  demoText = demoText;
  ngOnInit() {
    (async () => {
      const config: EditorConfig = {
        activation: 'immediate',
      };
      const Grammarly = await init(demoClientId, config);
      const textArea = document.querySelector('textarea');
      textArea && Grammarly.addPlugin(textArea);

      const input = document.querySelector('#test-input') as HTMLElement;
      input && Grammarly.addPlugin(input);

      const contentEditableDiv = document.querySelector(
        '[contenteditable]'
      ) as HTMLElement;
      contentEditableDiv && Grammarly.addPlugin(contentEditableDiv);
    })();
  }
}
