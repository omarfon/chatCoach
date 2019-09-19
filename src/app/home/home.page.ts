import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatsService, chat } from '../chats.service';
import { ModalController, IonContent, AlertController, PopoverController } from '@ionic/angular';
import { ChatonlineComponent } from '../chatonline/chatonline.component';
import { message, mynote } from '../models/message';
import { database } from 'firebase';
import { DatosBasicosService } from '../services/datos-basicos.service';
import { NotasService } from '../services/notas.service';
import * as moment from 'moment';
import { DatoscitasComponent } from '../components/datoscitas/datoscitas.component';
import { DatosclaudiaComponent } from '../components/datosclaudia/datosclaudia.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms : any = [];
  public conversacion;
  public msg;
  public note;
  public chat;
  currentUser = 'Claudia';
  public goalList: any[];
  public loadedGoalList: any[];
  public nombre;
  public datosBasicos;
  public patientid;
  public notasPaciente;
  public fechaEmbarazo;

  @ViewChild(IonContent) content: IonContent;
  public slideOpts = {
    slidesPerView:3.3
  }
  public opts = {
    slidesPerView: 2.1
  }

  constructor(public chatPvr: ChatsService,
              private modal: ModalController,
              public chatService: ChatsService,
              public alert:AlertController,
              public datosBasicSrv: DatosBasicosService,
              public notasSrv: NotasService,
              public popoverCtrl: PopoverController) {}

  ngOnInit(){
    this.chatPvr.getChatRooms().subscribe(chats =>{
     this.goalList  = chats;
     this.loadedGoalList = chats;
     /* console.log(this.chatRooms); */
     if(localStorage.getItem('name')){
       this.nombre = localStorage.getItem('name');
     }else{
       this.nombre = 'Coach';
     }
    });
    console.log(new Date()); 
  }

  initializeItems():void {
    this.goalList = this.loadedGoalList;
  }

  obtenerConversacion(chat){
    this.chat = chat;
    console.log(chat);
    this.chatService.getChatRoom(this.chat.id).subscribe( room =>{
      this.conversacion = room;
      console.log('this.conversacion:',this.conversacion);
    })
    setTimeout(()=>{
      this.content.scrollToBottom(300);
    },300)

    this.patientid = chat.datos.patientid;
    this.getDatosBasicos();
   /*  this.getNotasPaciente(); */

  }
  getDatosBasicos(){
    const patientid = this.patientid;
      this.datosBasicSrv.getDatosBasicos(patientid).subscribe((data:any) =>{
        this.datosBasicos = data;
        console.log('datos', this.datosBasicos);
        this.datosBasicSrv.getDoagnosticoEmbarazo(patientid).subscribe((data:any)=>{
          console.log('getDiagnosticoEmbarazo:', data);
          this.fechaEmbarazo  = data.fecha_ultima_regla;
          console.log(this.fechaEmbarazo);
        })
      })
  }

  /* getNotasPaciente(){
    const patienId = this.patientid;
    this.notasSrv.getNotas(patienId).subscribe((data:any)=>{
      this.notasPaciente = data;
      console.log('notas', this.notasPaciente)
    })
  } */

  getNotasPaciente(patientid, fechaini, fechafin){
      const patienId = this.patientid;
      const fechaIni = moment(this.patientid).format("YYYY/MM/DD");
      const fechaFin = moment().format("YYYY/MM/DD");;
      this.notasSrv.getNotas(patienId, fechaIni, fechaFin).subscribe((data:any)=>{
        this.notasPaciente = data.encuentros;
        console.log('thisnotaspaienter', this.notasPaciente)
      })


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

    setTimeout(()=>{
      this.content.scrollToBottom(300);
    },500)
  }

  sendMyNote(chat){
    const mynote : mynote ={
      content: this.note,
      type:'text',
      date: new Date(),
      user: 'Claudia',
    }
    this.chatService.sendNote(mynote, this.chat.id);
    this.obtenerConversacion(chat);
    this.note ="";
  }

  filterList(evt:any){
    /* console.log(evt); */
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if(!searchTerm){
      return
    }
    this.goalList = this.goalList.filter(currentGoal =>{
      if(currentGoal.datos.nombre && searchTerm){
        if(currentGoal.datos.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }

  async showModal(chat){
    const alert = await this.alert.create({
      header: 'guardar nota',
      subHeader:'Ingresa nota',
      inputs: [
        {
          name:'nota',
          type:'text',
          placeholder:'Ingresa nota'
        }
      ],
      buttons:[
        {
          text: 'Ok',
          handler: (data)=>{
            console.log('función aqui')
            const mynote : mynote ={
              content: data.nota,
              type:'text',
              date: new Date(),
              user: 'Claudia',
            }
            this.chatService.sendNote(mynote, this.chat.id);
            this.obtenerConversacion(chat);
            
          }
        }
      ]
    })
    await alert.present();
  }
  async openModalDataCita( ev: any, nota){
    console.log(nota);
    const popover = await this.popoverCtrl.create({
        component: DatoscitasComponent,
        event:ev,
        componentProps:{
          nota:nota
        }
    });
    await popover.present()
  }


  async openPopoverDataCoach(ev:any){
    const popoVer = await this.popoverCtrl.create({
      component: DatosclaudiaComponent
    });
    await popoVer.present();
  }
}
