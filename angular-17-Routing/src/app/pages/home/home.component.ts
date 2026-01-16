import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { BlogComponent } from "../blog/blog.component";
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { TransformCustomPipePipe } from '../../pipes/transform-custom-pipe.pipe';
import { Product } from '../../mock-data/product';
import { IProduct } from '../../interfaces/iproduct';
import { SearchInputPipe } from '../../pipes/search-input.pipe';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserDefine } from '../../shared/userDefined.directive';
import { AmazonProductsComponent } from "../amazon-products/amazon-products.component";
import { ValidationFunction } from '../../validation/validation.name';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AboutComponent,
    BlogComponent,
    CommonModule,
    TransformCustomPipePipe,
    SearchInputPipe,
    FormsModule,
    UserDefine,
    AmazonProductsComponent,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

  isTrue: boolean = false;
  isFalse: boolean = false;

  a:number[] = [1,2];

  userName:string = 'tarek';
  userDate: Date = new Date();
  userFreinds: string[] = ['ali','ahmed','mouna','marwa'];
  userObject: {userAge: number, lastName:string} = {
    userAge: 30,
    lastName: 'mohamed'
  };
  userSuccess: number = 0.6;
  userSalary: number = 10000;

  userCustomPipe: string = 'user Custom'

  /** html condition for showing what am working on */
  htmlCase: boolean = false;

  productList: IProduct[] = Product

  inputSearch: string = '';

  newProduct: IProduct = {
    id: 12,
    name: "new Product",
    price: 99.99,
    category: "Electronics",
    description: "Bluetooth over-ear headphones with noise isolation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    stock: 25,
    rating: { rate: 4.5, count: 150 }
  }

  // pure and Impure pipes
  addProduct() : void {
    this.productList
    .push(this.newProduct);

    console.log(this.productList);
  }


  getEventFromDirective(e:any): void {
    console.log('log event from Directive', e)
  }



  templateDrivenHtml: boolean = false;
  reactiveFormHtml: boolean = false;
  formGroupHtml: boolean = true;
  newSynthaxForformsAngular17: boolean = false;
  formBuilderHtml: boolean = false;
  /* Template Driven Form */
  // it uses directives
  // => for simple forms like username/email
  userNameDrivenForm: string ='';

  userInfo = {
    name: '',
    email: ''
  }

  submit(statusForm: NgForm) {
    if(statusForm.valid){
      console.log(statusForm.value);
    }
    else {
      statusForm.control.markAllAsTouched()
    }

  }

   getData(e: NgModel) {
    console.log(e)
  }


  /* Reactive Form */
  // it uses models and Formgroups(form control groups)
  // => for more complex forms

  userNameReactiveForm: FormControl = new FormControl(
    '',
   [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
   ]);

   userAgeReactiveForm: FormControl = new FormControl('',
    [
      Validators.min(18),
      Validators.max(50)
    ]);

    userPhoneReactiveForm: FormControl = new FormControl('',
    [
      Validators.pattern(/[0-9]/g),
      Validators.maxLength(8)
    ]);


    userEmailReactiveForm: FormControl = new FormControl('',
    [
      Validators.email
    ]);

    //3- Form Groups
    userData: FormGroup = new FormGroup({
      name: new FormControl('',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        ValidationFunction(/[0-9]/)
      ]),
      email: new FormControl('',
        [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('',
        [
        Validators.required,
        Validators.pattern(/[0-9]/g)
      ]),
      password: new FormControl(''),
      repassword: new FormControl(''),
      address: new FormGroup({
        city: new FormControl('', [
          Validators.required
        ]),
        street: new FormControl('', [
          Validators.required
        ])
      })
    }, this.passwordNotMatch)


    // we can call the error from here from the ts directly to the hole form or from another ts of custom errors check (validation.name.ts)
    passwordNotMatch(form: AbstractControl) : null | {[key:string]: boolean} {
      const pass = form.get('password')?.value;
      const repass = form.get('repassword')?.value;

      if(repass !== pass) {
        return {passNotMatch: true};
      }else return null
    }

    get name() {
      return this.userData.get('name');
    }
    get email() {
      return this.userData.get('email');
    }
    get phone() {
      return this.userData.get('phone');
    }
    get city() {
      return this.userData.get('address.city');
    }
    get street() {
      return this.userData.get('address.street');
    }


    // new synthax angular 17 for creating forms

    /************/
    /* userData17!: FormGroup
    address17!: FormGroup

    name17!: FormControl
    email17!: FormControl
    phone17!: FormControl
    city17!: FormControl
    street17!: FormControl
    lastname17!: FormControl

    initFormControle() {
      this.name17 = new FormControl('', Validators.required);
      this.email17 = new FormControl('', Validators.required);
      this.phone17 = new FormControl('', Validators.required);
      this.city17 = new FormControl('', Validators.required);
      this.street17 = new FormControl('', Validators.required);
      this.lastname17 = new FormControl('', Validators.required);
    }

    initFormGroup() {
      this.userData17 = new FormGroup({
        name17: this.name17,
        email17: this.email17,
        phone17: this.phone17,
        lastname17: this.lastname17,
        address17: new FormGroup({
          city17: this.city17,
          street17: this.street17
        }),
      });


    } */

    /***************/


  // - FormBuilder
  constructor(private _formBuilder: FormBuilder){
    //console.log('from Template Driven Form',this.userNameDrivenForm)
    //console.log('from Reactive Form ',this.userAgeReactiveForm)

    //console.log(this.userData)

    //this.name?.valueChanges.subscribe(
    //  (d) => console.log('name', d)
    //)

    // 2- new synthax
    //this.initFormControle();
    //this.initFormGroup();

    //3 - Form Builder
  }

    userData17: FormGroup = this._formBuilder.group({
      name17: ['', Validators.required],
      email17: ['',Validators.required],
      phone17: ['',Validators.required],

      address17: this._formBuilder.group({
        city17: ['', Validators.required],
        street17: ['', Validators.required]
      })
    })


    get name17() {
      return this.userData17.get('name');
    }
    get email17() {
      return this.userData17.get('email');
    }
    get phone17() {
      return this.userData17.get('phone');
    }
    get city17() {
      return this.userData17.get('address.city');
    }
    get street17() {
      return this.userData17.get('address.street');
    }









    submitFormGroup() {
      // - form group
      console.log(this.userData)
      if(this.userData.valid) {
      console.log(this.userData.value)
       this.userData.reset();
      }else {
        this.userData.markAllAsTouched();
        Object.keys(this.userData.controls).forEach(
          (c) => this.userData.controls[c].markAsDirty()
        )
      }

      // - form builder
      /* console.log(this.userData17)
      if(this.userData17.valid) {
      console.log(this.userData17.value)
       this.userData17.reset();
      }else {
        this.userData17.markAllAsTouched();
        Object.keys(this.userData17.controls).forEach(
          (c) => this.userData17.controls[c].markAsDirty()
        )
      } */

    }

























  // just explanation of shallow and deep copy
  getUserName(): void {
    let userName1 = {name : 'tarek'};
    let newUserName = {...userName1};
    console.log(userName1);
    console.log(newUserName);
    userName1.name = 'marwa';
    console.log('############');
    console.log(userName1);
    console.log(newUserName);
  }

    /**
       stack                  |                      heap
      userName = #018      |        {name : 'tarek'} #018 address points (reference) to this object // shallow copy
      newUserName = #018   |
    */

    /**
       before to isolate the newUserName from userName we did:
       let newUserName = {...userName1}; here the newUserName will not take the new values of the userName when changed // deep copy
    */

  ngOnInit(): void {
    this.getUserName();
  }

}
