import { ProductService } from './../../components/products/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  form: FormGroup;
  searchTitle: any

  constructor(private router: Router, private formBuilder: FormBuilder, private productService: ProductService) {
    this.form = this.formBuilder.group({
      search: [''],
    })
   }

  ngOnInit(): void {
    this.form.get('search')?.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((text: string) => {
      this.searchBooks(text);
    });
  }
 
  searchBooks(title: string) {
    this.productService.findBookByTitle(title).subscribe((response: any) => {
       console.log(response)
    });
  }
  
     

    //Button to navigate to create page 
    navigateProductCreate(): void {
    this.router.navigate(['products/create']) 
  }
}
