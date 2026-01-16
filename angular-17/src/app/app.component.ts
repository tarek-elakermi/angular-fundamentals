import { AfterViewChecked, Component, ContentChild, ElementRef, Pipe, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from './core/interfaces/iproduct';
import { ChildComponent } from './child/child.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { ParentComponent } from "./newPages/parent/parent.component";
import { Child1Component } from "./newPages/child1/child1.component";
import { GrandChildComponent } from "./newPages/grand-child/grand-child.component";
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from "./pages/blog/blog.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChildComponent,
    ContactComponent,
    AboutComponent,
    ParentComponent,
    Child1Component,
    GrandChildComponent,
    HomeComponent,
    BlogComponent,
    RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-17';


  userName: string = 'tarek';
  userAge: string = '20';
  userEmail: string = 'hhh@gmail.com';
  userPhone: number = 12345;

  searchInput: string = '';

  constructor(){
    console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.userPhone);
    console.log(this.userAge);
  }
  

  

  log(): void {
    console.log("hello");
  }

  showAlert(e: any): void{
    alert("not allowed copy")
  }

  /** Directive */
  IsTrue: boolean = false;
  IsActive: boolean = false;

  status: boolean = true;
  userRole: string = 'admin';

  friends: string[] = ['tarek','elakermi','not welcome','good job'];

products: IProduct[] = [
  //{id:1,name: 'tv' , price: 1000, img:'../assets/2.jpg'},
  //{id:2,name: 'laptop' , price: 2000, img:'../assets/3.jpg'},
  //{id:3,name: 'airpods' , price: 1000, img:'../assets/4.jpg'},
  //{id:4,name: 'iphone' , price: 7000, img:'../assets/5.jpg'}
];

update() {
  this.products = [
  {id:1,name: 'tv' , price: 1000, img:'../assets/2.jpg'},
  {id:2,name: 'laptop' , price: 2000, img:'../assets/3.jpg'},
  {id:3,name: 'airpods' , price: 1000, img:'../assets/4.jpg'},
  {id:4,name: 'iphone' , price: 7000, img:'../assets/5.jpg'},
  {id:5,name: 'new item' , price: 7000, img:'../assets/1.jpg'}

];
}


a: number[] = [1,2];

// passing data from parent to child (component to component)

getDataFromChild: string = '';

log1(e:any) {
  console.log(e);
}

// other decorators
@ViewChild('el', {static: true}) myEl!: ElementRef

/** ViewChild [Component]*/
@ViewChild(ContactComponent, {static: true, read: ContactComponent}) contact!: ContactComponent;

/** ViewChild [ElementRef Interface == from Html DOM]*/
@ViewChild('myComp', {static: true, read: ElementRef}) contactHtml!: ElementRef;


ngOnInit(): void {
  //console.log('from OnInit 1',this.myEl)
  //console.log('from OnInit 1',this.myEl.nativeElement)
  //this.myEl.nativeElement.classList.remove('bg-danger');

  // processing the dom directly from ElementRef Interface

  /* console.log('from OnInit 2',this.contact.nativeElement.children)
    for(let i =0 ; i <this.contact.nativeElement.children.length; i++) {
      this.contact.nativeElement.children[i].classList.add(
        'bg-danger'
      );
    } */

  //this.contact.userAge = '100';
  //this.contact

  //console.log(this.contact.userAge)
}

   // Accesing Multiple elements from Dom: Child element @ViewChildren

   // listening from the html ElementRef interface 
   @ViewChildren('all') allEl!: QueryList<ElementRef>

  // listening from the Component 
  @ViewChildren('comp', {read: ElementRef}) allComp!: QueryList<AboutComponent | ContactComponent>;

   ngAfterViewInit(): void {
    // 1 - from ElementRef Interface
    //console.log(this.allEl);
    //  this.allEl.forEach((el)=> el.nativeElement.classList
    //  .add('text-black'));

      // 2 - from List of Components 
      //console.log(this.allComp);
      //this.allComp.forEach(
      //  (com) => console.log(com)
        //(com: any) => console.log(com.userAge = 31)
      //);
   }

   // - Routing

   route: string= 'home';


   

  




}
