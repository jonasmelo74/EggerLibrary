import { Book } from '../book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  books: any;

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) {
      
     }

  ngOnInit(): void {
    //Lendo o id do livro e preenchendo no objeto product
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.books = this.productService.getBookById(id).subscribe(book => {
      console.log(book);
      this.books = book;
    });
  }

  change(){
    if (this.books !== null) {
    this.productService.updateBook(this.books).subscribe(() => {
    this.productService.showMessage('Livro Alterado!')
    this.router.navigate(['products']);
    })
  }
}

  cancelChange(){
    this.router.navigate(['products']);
    this.productService.showMsg('msg1')
  }
}
