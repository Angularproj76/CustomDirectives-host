import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "#c8E6c9"       //we changed the back ground color of a element, 
  // the nativeElement maniculite the DOM element Directly 
  // Renderer2 is alows us to maniculate the DOM , with out accessing the DOM elements Direty. it's provides the alier to the DOM
  //new change  
}

}
