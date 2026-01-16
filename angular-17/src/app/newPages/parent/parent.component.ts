import { Component, ContentChild, ContentChildren, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    Child1Component,
    GrandChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  // @ContentChild for Content Projection from Element Ref
   @ContentChild('myp', {static: true}) myP!: ElementRef;

  // @ContentChild for Content Projection from Component
   @ContentChild(Child1Component, {static: true}) child1 !: Child1Component;

   @ContentChild(GrandChildComponent, {static: true, descendants: true}) fromCHildContent!: ElementRef;


     // @ContentChildren for Content Projection from !!
     @ContentChildren('children', {descendants: true}) allChildren !: QueryList<Child1Component | GrandChildComponent>;

   ngOnInit(): void {
   // console.log('from @ContentChild',this.myP.nativeElement);
   //1- @ContentChild
    //console.log(this.child1)
    //console.log(this.fromCHildContent)
   }

   ngAfterContentInit(): void {
    // 2- @ContentChildren

    console.log('from ngAfterContentInit', this.allChildren)
    
   }




}
