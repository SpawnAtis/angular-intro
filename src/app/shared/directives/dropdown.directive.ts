import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

