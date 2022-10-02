import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerMouseover]'
})
export class HostListenerMouseoverDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

 @HostListener('click') mousehover(){
        this.renderer.setStyle(this.elementRef.nativeElement,'margin','30px 30px') 
        this.renderer.setStyle(this.elementRef.nativeElement,'transition','0.52') 
        this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue')  
       
        // host listener we are using the hover to change behavier of an element, it is an event (mouseenter)
        // @HostListener decorator listens to the DOM event on the host element 
      
      }
      @HostListener('mouseleave') onMousehoverOut(){
        this.renderer.setStyle(this.elementRef.nativeElement,'margin','10px 20px') 
        this.renderer.setStyle(this.elementRef.nativeElement,'transition','0.52') 
        this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow')  
      }

}
