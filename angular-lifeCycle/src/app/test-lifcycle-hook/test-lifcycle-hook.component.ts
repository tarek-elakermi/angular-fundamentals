import { CommonModule, NgIf } from '@angular/common';
import { AfterContentChecked, AfterContentInit, afterNextRender, AfterRenderPhase, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, HostListener, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-lifcycle-hook',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './test-lifcycle-hook.component.html',
  styleUrl: './test-lifcycle-hook.component.css'
})
export class TestLifcycleHookComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  
  @Input() term!: string;

  // will reference projected content if it exists
  @ContentChild('projected', {static: false})
  projectedEl!: ElementRef | undefined;

  @ViewChild('titleEl')
  titleEl!: ElementRef;


  constructor() {
    this.logIt('From constructor')

  }
  
  
  
    ngOnChanges(changes: SimpleChanges): void {
      this.logIt('From ngOnChange() hook')
      console.log('ngOnChnages() fired:', changes)
    }

    ngDoCheck(): void {
      this.logIt('From ngDoCheck() hook')
    }

    ngOnInit(): void {
      this.logIt('From ngOnInit() hook')
      console.log('ngOnInit → titleEl is', this.titleEl);
    }

    ngAfterContentInit(): void {
      this.logIt('From ngAfterContentInit() hook')
      if(this.projectedEl) {
        this.logIt('🧩 ngAfterContentInit → Projected content FOUND')
        console.log('Projected text:', this.projectedEl.nativeElement.textContent);
      } else {
        this.logIt('🧩 ngAfterContentInit → NO projected content (empty content phase)');
        this.logIt('Angular has finished the content projection step')
      }
    }

    ngAfterContentChecked(): void {
      this.logIt('From ngAfterContentChecked() hook')
      this.logIt('🔁 ngAfterContentChecked → content checked')
    }
 
    ngAfterViewInit(): void {
      this.logIt('From ngAfterViewInit() hook')
      this.logIt('🎬 ngAfterViewInit → view initialized')
      console.log('View element text initialized:', this.titleEl.nativeElement.textContent);
    }

    ngAfterViewChecked(): void {
      this.logIt('From ngAfterViewChecked() hook')
      this.logIt('🔁 ngAfterViewChecked → view checked');
      console.log('View element text in AfterViewChecked:', this.titleEl.nativeElement.textContent);

    }

    ngOnDestroy(): void {
      this.logIt('From ngOnDestroy() hook')
      this.logIt('💀 ngOnDestroy → component is about to be destroyed');
        console.log('titleEl before destruction:', this.titleEl?.nativeElement.textContent);

        setTimeout(() => {
        console.log('Trying to access titleEl later:', this.titleEl?.nativeElement.textContent);
      }, 5000);


    }
  


  

  


















































  logIt(hook: string) { 
    console.log(`HOOK FIRED 👉 ${hook}  \n`);
  }

}
