import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Note} from '../../../models/note'
 import { NoteService } from '../service/note.service';
 import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  contact?: Note;
  
  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouteService) { }

  note: Note = {  title: '', content:''};
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteService.getNote(+id).subscribe((data) => {
        this.note = data;
      })
    });
  }

  editNote() {
    this.noteService.editNote(this.note?.id, this.note).subscribe(data => {
      this.note = data;
      this.routeService.toHome();
    })
  }
 
 
}                           


