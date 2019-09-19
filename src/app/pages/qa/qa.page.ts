import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.page.html',
  styleUrls: ['./qa.page.scss'],
})
export class QaPage implements OnInit {

  public qaDates;
  public qaCategories;

  constructor(public alert: AlertController,
              public notes: NotesService) { }

  ngOnInit() {

    this.notes.getNotesForCategory().subscribe(data =>{
      this.qaCategories = data;
      console.log(this.qaCategories);
    });
  }

  qaDetail(q){
    console.log('q', q);
    this.qaDates = q;
  }

  openPopoverDataCoach(){
    console.log('mostrar data claudia');
  }


}
