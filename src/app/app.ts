import { Component } from '@angular/core';

type Service = {
  title: string;
  text: string;
  icon: string;
};

type SummitImage = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly whatsappUrl = 'https://wa.me/message/EANVLTVFIU6PK1';
  protected readonly instagramUrl = 'https://www.instagram.com/legalcloser/';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/leonela-cabello/';

  protected readonly services: Service[] = [
    {
      title: 'Salir del Veraz',
      text: 'Estrategia para regularizar tu situación crediticia y recuperar tranquilidad financiera.',
      icon: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h4 M17 14l2 2 4-5',
    },
    {
      title: 'Registro de marcas',
      text: 'Búsqueda, presentación y seguimiento para proteger el valor de tu identidad comercial.',
      icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18z M9 15V9h4a2 2 0 0 1 0 4H9 M13 13l3 4',
    },
    {
      title: 'Contratos',
      text: 'Redacción y revisión de acuerdos claros, justos y adaptados a cada operación.',
      icon: 'M4 20h16 M7 17l9.5-9.5 3 3L10 20H7z M15 6l3-3 3 3-3 3z',
    },
    {
      title: 'Familia',
      text: 'Acompañamiento sensible en procesos familiares que requieren claridad y cuidado.',
      icon: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M3 21a5 5 0 0 1 10 0 M11 21a5 5 0 0 1 10 0',
    },
    {
      title: 'Accidentes de transito',
      text: 'Gestión de reclamos e indemnizaciones con foco en defender tus derechos.',
      icon: 'M5 16h14l-2-6H7l-2 6z M7 16v3 M17 16v3 M8 19h.01 M16 19h.01 M3 13h3 M18 13h3',
    },
    {
      title: 'Penal',
      text: 'Defensa penal comprometida, confidencial y estratégica desde el primer contacto.',
      icon: 'M4 20h16 M6 18V9l6-4 6 4v9 M9 18v-7 M12 18v-7 M15 18v-7 M3 9h18',
    },
  ];

  protected readonly summitImages: SummitImage[] = [
    {
      src: '/assets/images/worksummit-auditorium.jpg',
      alt: 'Auditorio del WorkSummit Mar del Plata 2025',
    },
    {
      src: '/assets/images/worksummit-banner.jpg',
      alt: 'Leonela Cabello junto al banner de economía del conocimiento',
    },
    {
      src: '/assets/images/worksummit-selfie.jpg',
      alt: 'Leonela Cabello en el WorkSummit junto a otra asistente',
    },
  ];
}
