import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          Calculations assume you have vsync on at 60fps.
        </a>
      </div>
    </nav>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
