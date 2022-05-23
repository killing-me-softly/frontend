import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuItems = [
    {
      name: 'יומן',
      link: '/business/my-diary',
      iconClass: 'fas fa-calendar-week',
      introID: 'intro-menu-diary'
    },
    {
      name: 'העסק שלי',
      iconClass: 'fas fa-home',
      id: 'my-business',
      subMenus: [
        {
          name: 'מבט כללי',
          link: '/business/home',
          iconClass: 'fas fa-binoculars',
        },
        {
          name: 'תורים להיום',
          link: '/business/today-appointments',
          iconClass: 'fas fa-handshake'
        },
        {
          name: 'השירותים שלי',
          link: '/business/my-services',
          iconClass: 'fas fa-address-card',
          introID: 'intro-menu-services'
        },
        {
          name: 'האילוצים שלי',
          link: '/business/my-constraints',
          iconClass: 'fas fa-calendar-times',
          introID: 'intro-menu-constraints'
        },
        {
          name: 'האירועים שלי',
          specialFeature: true,
          link: '/business/my-events',
          iconClass: 'fas fa-users-class'
        },
        {
          name: 'הצעות ייעול',
          link: '/business/optimization-tips',
          iconClass: 'fab fa-cloudscale'
        },
      ]
    },
    {
      name: 'אישור תורים',
      link: '/business/approve-appointments',
      iconClass: 'fas fa-thumbs-up'
    },
    {
      name: 'לקוחות',
      link: '/business/my-customers',
      iconClass: 'fas fa-users'
    },
    {
      name: 'דוחות',
      link: '/business/my-reports',
      iconClass: 'fas fa-file-chart-line'
    },
    {
      name: 'מיתוג העסק',
      link: '/business/business-branding',
      iconClass: 'fas fa-megaphone',
    },
    {
      name: 'הגדרות',
      iconClass: 'fas fa-cogs',
      id: 'settings',
      subMenus: [
        {
          name: 'הגדרות עסק',
          link: '/business/business-settings',
          iconClass: 'fas fa-briefcase',
          introID: 'intro-menu-settings'
        },
        {
          name: 'תשלומים',
          link: '/business/payments',
          iconClass: 'fal fa-credit-card'
        }
      ]
    },
    {
      name: 'מה חדש?',
      link: '/business/whats-new',
      iconClass: 'fas fa-lightbulb-on',
    },
  ];

  constructor() {}
}
