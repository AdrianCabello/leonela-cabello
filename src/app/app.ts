import { Component, HostListener, signal } from '@angular/core';

type Service = {
  id: string;
  title: string;
  text: string;
  includes: string[];
  icon: string;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type FaqItem = {
  question: string;
  answer: string;
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
  protected readonly menuOpen = signal(false);

  protected readonly whatsappUrl = 'https://wa.me/5492262617014';
  protected readonly calendlyUrl = 'https://calendly.com/cabelloleonela';
  protected readonly instagramUrl = 'https://www.instagram.com/legalcloser/';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/leonela-cabello/';

  protected readonly services: Service[] = [
    {
      id: 'veraz',
      title: 'Salir del Veraz',
      text: 'Estrategia para regularizar tu situación crediticia y recuperar tranquilidad financiera.',
      includes: [
        'Análisis de la situación',
        'Reclamos y rectificaciones',
        'Seguimiento del trámite',
      ],
      icon: 'M5 4h14v16H5z M8 8h8 M8 12h8 M8 16h4 M17 14l2 2 4-5',
    },
    {
      id: 'marcas',
      title: 'Registro de marcas',
      text: 'Búsqueda, presentación y seguimiento para proteger el valor de tu identidad comercial.',
      includes: [
        'Búsqueda de antecedentes',
        'Presentación ante INPI',
        'Seguimiento y observaciones',
      ],
      icon: 'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18z M9 15V9h4a2 2 0 0 1 0 4H9 M13 13l3 4',
    },
    {
      id: 'contratos',
      title: 'Contratos',
      text: 'Redacción y revisión de acuerdos claros, justos y adaptados a cada operación.',
      includes: ['Redacción desde cero', 'Revisión de riesgos', 'Negociación de condiciones'],
      icon: 'M4 20h16 M7 17l9.5-9.5 3 3L10 20H7z M15 6l3-3 3 3-3 3z',
    },
    {
      id: 'familia',
      title: 'Familia y sucesiones',
      text: 'Acompañamiento sensible en divorcios, sucesiones y procesos familiares que requieren claridad y cuidado.',
      includes: ['Divorcios y acuerdos', 'Sucesiones', 'Orientación en conflictos familiares'],
      icon: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M3 21a5 5 0 0 1 10 0 M11 21a5 5 0 0 1 10 0',
    },
    {
      id: 'accidentes',
      title: 'Accidentes de tránsito',
      text: 'Gestión de reclamos e indemnizaciones con foco en defender tus derechos.',
      includes: [
        'Evaluación del reclamo',
        'Gestión ante aseguradoras',
        'Negociación de indemnizaciones',
      ],
      icon: 'M5 16h14l-2-6H7l-2 6z M7 16v3 M17 16v3 M8 19h.01 M16 19h.01 M3 13h3 M18 13h3',
    },
    {
      id: 'penal',
      title: 'Penal',
      text: 'Defensa penal comprometida, confidencial y estratégica desde el primer contacto.',
      includes: ['Consulta confidencial', 'Evaluación de alternativas', 'Defensa y acompañamiento'],
      icon: 'M4 20h16 M6 18V9l6-4 6 4v9 M9 18v-7 M12 18v-7 M15 18v-7 M3 9h18',
    },
  ];

  protected readonly processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Primera conversación',
      text: 'Me contás qué está pasando y coordinamos una reunión para entender el contexto y las prioridades.',
    },
    {
      number: '02',
      title: 'Análisis y estrategia',
      text: 'Reviso la información disponible, explico las alternativas y definimos un camino posible antes de avanzar.',
    },
    {
      number: '03',
      title: 'Gestión y seguimiento',
      text: 'Acompaño cada instancia con comunicación clara sobre avances, decisiones y próximos pasos.',
    },
  ];

  protected readonly faqItems: FaqItem[] = [
    {
      question: '¿Qué necesito para la primera reunión?',
      answer:
        'Una explicación breve de la situación y, si los tenés, documentos, mensajes, contratos o datos relevantes. Antes de la reunión te indico si hace falta preparar algo más.',
    },
    {
      question: '¿Toda consulta termina en un juicio?',
      answer:
        'No. Muchos conflictos pueden resolverse con una intimación, una negociación o un acuerdo. La primera evaluación sirve para comparar alternativas, riesgos y tiempos.',
    },
    {
      question: '¿Cómo se coordina una consulta?',
      answer:
        'Podés escribir por WhatsApp o elegir un horario disponible en Calendly. La confirmación incluye la información necesaria para el encuentro.',
    },
    {
      question: '¿La información que comparto es confidencial?',
      answer:
        'Sí. La consulta profesional se trata con reserva. Evitá enviar documentación sensible por redes sociales y usá los canales de contacto indicados en este sitio.',
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

  protected toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    this.closeMenu();
  }
}
