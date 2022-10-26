import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../../../models/note'
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noteList: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data=>{
      this.noteList = data;
    });
  }

}
