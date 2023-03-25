import { Book } from './../book.model';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: any;

  constructor(private productService: ProductService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.productService.getBookById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    if (this.product !== null) {
      const id = this.route.snapshot.params['id']
      this.productService.deleteBookById(id).subscribe(
        response => {
          console.log('Livro excluído com sucesso!');
          this.productService.showMessage('Livro excluído com sucesso');
          this.productService.navigateProduct('products') 
        },
        error => {
          console.error('Erro ao excluir o livro:', error);
        }
      );
    } else {
      throw 'product is null';
    }
  }

  cancelDelete(): void {
    this.productService.navigateProduct('products')
    this.productService.showMsg('msg2')
  }
}