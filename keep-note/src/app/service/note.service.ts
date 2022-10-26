import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'models/note';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NoteService {

  URL: string = "http://localhost:3000/notes";
  
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return this.http.get<Array<Note>>(this.URL);
  }

  getNote(id?: number): Observable<Note> {
    return this.http.get<Note>(`${this.URL}/${id}`);
  }

  addNote(note: Note) {
    return this.http.post<Note>(this.URL, note);
  }

  editNote(id?: number, note?: Note) {
    return this.http.put<Note>(`${this.URL}/${id}`, note);
  }

  DeleteNote(id?: number) {
    return this.http.delete<Note>(`${this.URL}/${id}`);
  }

  


}
