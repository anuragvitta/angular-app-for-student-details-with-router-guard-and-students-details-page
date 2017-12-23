import { Directive, Input, ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[appMyhighlighter]'
})
export class MyhighlighterDirective {
  @Input() value: any;
  ngOnInit() {
    //console.log(this.value);
    if(this.value>65)
    {
      this.highlight("green");
    }
    else if(this.value>35)
    {
      this.highlight("orange");
    }
    else
    {
      this.highlight("red");
    }
  }
  constructor(private el: ElementRef) {
 }
 private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
}
