import { Router } from '@angular/router';
import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'  //service singleton angular = root
  //Sigleton é uma classe que possue uma única instância 
})
export class ProductService {
  
  //[x: string]: any;

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private route: Router) { }

  apiUrl = 'https://egger-library.uc.r.appspot.com';

findBookByTitle(title: string) {
    return this.http.get('/books/findBookByTitle/' + title);
}
  
  // Método para buscar todos os livros
getBooks(): Observable<Book[]> {
  return this.http.get<Book[]>(`${this.apiUrl}/books/findAllBooks`);
}

// Método para buscar um livro pelo id
getBookById(id: string): Observable<Book> {
  return this.http.get<Book>(`${this.apiUrl}/books/findBookById/${id}`);
}

// Método para criar um novo livro
createBook(book: Book): Observable<Book> {
  console.log(book)
  return this.http.post<Book>(`${this.apiUrl}/books/insert `, book);
}

// Método para atualizar um livro
updateBook(book: Book): Observable<void> {
  const url = `${this.apiUrl}/books/updateById/${book.id}`;
  return this.http.put<void>(url, book);
}

// Método para deletar um livro
deleteBookById(id: string): Observable<any> {
  const url = `${this.apiUrl}/books/deleteBookById/${id}`;
  return this.http.delete(url);
}


  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //Função passando o router
  navigateProduct(route: string) {
  this.route.navigate([route]); 
  }



  showMsg(msg: String){  
    switch (msg) {
      case 'msg1':
        let msg1 = this.showMessage('Livro não foi alterado')
        break;
      case 'msg2':
        let msg2 =  this.showMessage('Livro não foi excluído')
        break;
      case 'msg3':
        let msg3 = this.showMessage('Novo livro foi cancelado')
        break;
    }
  }
}