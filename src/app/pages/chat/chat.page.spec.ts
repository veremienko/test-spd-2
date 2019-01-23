import {TestBed, async} from '@angular/core/testing';
import {ChatPageComponent} from './chat.page';
import {HttpModule} from '@angular/http';
import {ChatService} from '../../services/chat.service';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../../pipes/filter.pipe';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('ChatComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatPageComponent,
        FilterPipe
      ],
      imports: [
        HttpModule,
        FormsModule
      ],
      providers: [
        ChatService,
      ]
    }).compileComponents();
  }));
  it('should create the ChatComponent', async(() => {
    const fixture = TestBed.createComponent(ChatPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
