import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {

  private _show: boolean = false;

  constructor(private el: ElementRef) {
    this.setup()
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const button = document.createElement('button');

    button.className = 'btn btn-outline-secondary float-right';
    button.style.top = "-38px"
    button.style.position = 'relative';
    button.innerHTML = '<i class="material-icons" style="font-size: 1rem; width: 40px;">visibility_off</i>';
    button.addEventListener('click', (event) => {
      this.toggle(button);
    });
    parent.appendChild(button);
  }

  toggle(button: HTMLElement) {
    this._show = !this._show;

    if (this._show) {
      this.el.nativeElement.setAttribute('type', 'text');

      button.className = 'btn btn-outline-secondary float-right';
      button.style.top = "-38px"
      button.style.position = 'relative';
      button.innerHTML = '<i class="material-icons" style="font-size: 1rem; width: 40px;">visibility_off</i>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');

      button.className = 'btn btn-outline-secondary float-right';
      button.style.top = "-38px"
      button.style.position = 'relative';
      button.innerHTML = '<i class="material-icons" style="font-size: 1rem; width: 40px;">visibility</i>';
    }
  }
}
