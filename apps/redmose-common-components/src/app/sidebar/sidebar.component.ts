import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { menuItems, moreMenuItems } from './routes';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'convertedin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, AccordionModule],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SidebarComponent {
  get accordionItems() {
    return menuItems;
  }
  get moreItems() {
    return moreMenuItems;
  }
}
