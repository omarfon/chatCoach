import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { message } from '../models/message';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-chatonline',
  templateUrl: './chatonline.component.html',
  styleUrls: ['./chatonline.component.scss'],
})
export class ChatonlineComponent implements OnInit {
public chat: any;
/* public mensajes = []; */
public message : message;
public room: any;
public msg;

  constructor(public navParams: NavParams, 
              public modalCtrl: ModalController,
              public chatService: ChatsService) {

              }
              
    ngOnInit() {
    this.chat = this.navParams.get('chat');
    
    this.chatService.getChatRoom(this.chat.id).subscribe( room =>{
      this.room = room;
      console.log(room);
    })
  }

  closeChat(){
    this.modalCtrl.dismiss();
  }

  sendMessage(){
    const mensaje : message ={
      content: this.msg,
      type:'text',
      date: new Date(),
      user: 'Claudia',
    }

    this.chatService.sendMessageToFirebase(mensaje, this.chat.id );
    this.msg = "";
  }
}
