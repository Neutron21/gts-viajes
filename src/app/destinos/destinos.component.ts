import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.sass']
})
export class DestinosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initCounterObserver();
  }

  private initCounterObserver(): void {
    const counters = document.querySelectorAll('.stats-item__number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters(counters);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
      observer.observe(statsBar);
    }
  }

  private animateCounters(counters: NodeList): void {
    counters.forEach((el: any) => {
      const target = parseInt(el.getAttribute('data-target') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let count = 0;
      
      // Velocidad: Ajusta el divisor (ej. 100) para hacerlo más lento o rápido
      const duration = 9000; 
      const stepTime = 40;
      const steps = duration / stepTime;
      const increment = target / steps;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          el.innerText = Math.ceil(count) + suffix;
          setTimeout(updateCount, stepTime);
        } else {
          el.innerText = target + suffix;
        }
      };
      updateCount();
    });
  }
}