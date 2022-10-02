import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer2example]'
})
export class Renderer2exampleDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) {

   }
    ngOnInit(){
      this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red')
      this.renderer.addClass(this.element.nativeElement,'renderer-class')
    }

}
