import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.sass']
})
export class NosotrosComponent {

ngAfterViewInit(): void {

  const cards = document.querySelectorAll('.testimonio-card');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });

  }, {
    threshold: 0.2
  });

  cards.forEach((card) => observer.observe(card));

}  

}
