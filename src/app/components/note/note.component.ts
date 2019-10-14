import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService } from 'src/app/chats.service';
import { popoverController } from '@ionic/core';
import { PopoverController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input ('chat') chat;

  constructor(public router: Router, 
              public chatSrv: ChatsService,
              public popover: PopoverController,
              public nav: NavController) { }

  ngOnInit() {
    console.log('chat en modal', this.chat);
  }

  sendNote(data){
    const mynote  ={
      content: data,
      type:'text',
      date: new Date(),
      user: 'Claudia',
    }
    console.log(mynote);
    const chatId = this.chat.id;
    this.chatSrv.sendNote(mynote, chatId);
    this.popover.dismiss();
    }



  }


