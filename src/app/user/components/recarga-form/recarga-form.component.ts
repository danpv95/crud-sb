import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recarga-form',
  templateUrl: './recarga-form.component.html',
  styleUrls: ['./recarga-form.component.css']
})
export class RecargaFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;

      //this.productsService.createProduct(product)
      //.subscribe((newProduct) => {
       // console.log(newProduct);
        //this.router.navigate(['./admin/products']);
     // });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      idunicoavion: ['', [Validators.required]],
      aerolineavuelo: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

}
