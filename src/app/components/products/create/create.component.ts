import { ProductService } from 'src/app/components/products/product.service';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  
  constructor(private productService: ProductService,
    private router: Router, private formBuilder: FormBuilder) { 
      this.form = this.formBuilder.group({
        author: ['', Validators.required],
        title: ['', [Validators.required]],
      })
    }

    ngOnInit() {
     
    }

  createProduct(): void {
    if (this.form.valid) {
      console.log(this.form.value)
    this.productService.createBook(this.form.value).subscribe(() => {
    this.productService.showMessage('Livro criado!')
    this.router.navigate(['/products'])
    })
  } else {
    this.productService.showMessage('Não existe livro para cadastro!');
  }
}

  cancel(): void {
    this.router.navigate(['products']);
    this.productService.showMsg('msg3')
  }
}