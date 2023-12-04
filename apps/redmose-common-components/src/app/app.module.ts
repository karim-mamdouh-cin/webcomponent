import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SidebarComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private __injector: Injector) {}
  ngDoBootstrap(): void {
    const sideBarWidget = createCustomElement(SidebarComponent, {
      injector: this.__injector,
    });

    customElements.define('convertedin-sidebar', sideBarWidget);
  }
}
