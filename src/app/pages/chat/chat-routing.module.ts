import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChatPageComponent} from './chat.page';

const chatRoutes: Routes = [
  {
    path: '',
    component: ChatPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChatRoutingModule {
}
