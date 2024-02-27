import { Component } from '@angular/core';
import {Product, Root} from "../../common/sport";
import {FormValidators} from "../../validators/FormValidators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SportService} from "../../service/sport.service";

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent {
lista!: Root;

formSport: FormGroup = this.formBuilder.group({
  _id: [''],
  name: ['',[FormValidators.notsex,Validators.required,FormValidators.notOnlyWhitespace,Validators.minLength(5)]],
  img: ['',[Validators.required,FormValidators.notOnlyWhitespace,Validators.minLength(7)]],
  category: ['',[Validators.required,FormValidators.notOnlyWhitespace,Validators.minLength(3)]],
  price: [0,[Validators.required,Validators.min(0)]],
  size: ['',[Validators.required,Validators.maxLength(1)]]
})
  constructor(private arou: ActivatedRoute,private sportService: SportService,private formBuilder: FormBuilder,private router: Router) {
  this.loadSport();
  }
  get name(){
  return this.formSport.get('name')
  }get img(){
  return this.formSport.get('img')
  }get category(){
  return this.formSport.get('category')
  }get price(){
  return this.formSport.get('price')
  }get size(){
  return this.formSport.get('size')
  }

  private loadSport() {
    const id = this.arou.snapshot.params['id'];
    this.sportService.oneProduct(id).subscribe({
      next: value => {
        this.lista=value;
        this.formSport.patchValue(value);
        console.log(this.lista);
      },
      error:err => {
        console.error(err);
      }
    })
  }

  update() {
    if (this.formSport.invalid){
      this.formSport.markAllAsTouched();
      return;
    }
    this.sportService.update(this.formSport.getRawValue()).subscribe({
      next: value => {
        alert(value.name+'actualizado');
        this.router.navigateByUrl('sportList')
      },
      error:err => {
        console.error(err);
      }
    })
  }
}
