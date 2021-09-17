import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RemitHeaderComponent } from './components/remit-header/remit-header.component';
import { RemitHeaderQuotesComponent } from './components/remit-header-quotes/remit-header-quotes.component';
import { ChartsModule } from 'ng2-charts';
import { RemitMarketTrendComponent } from './components/remit-market-trend/remit-market-trend.component';
import { RemitMarketTrendGraphComponent } from './components/remit-market-trend-graph/remit-market-trend-graph.component';
import { RemitSupportComponent } from './components/remit-support/remit-support.component';
import { RemitFooterComponent } from './components/remit-footer/remit-footer.component';
import { RemitLoginFormComponent } from './components/remit-login-form/remit-login-form.component';
import { RemitRegisterFormComponent } from './components/remit-register-form/remit-register-form.component';
import { RemitExchangeFormComponent } from './components/remit-exchange-form/remit-exchange-form.component';
import { RemitLandingPageComponent } from './components/remit-landing-page/remit-landing-page.component';
import { RemitAdminDashboardComponent } from './components/remit-admin-dashboard/remit-admin-dashboard.component';
import { RemitAdminHeaderComponent } from './components/remit-admin-header/remit-admin-header.component';
import { RemitAdminNavComponent } from './components/remit-admin-nav/remit-admin-nav.component';
import { RemitAdminExchangeDisplayComponent } from './components/remit-admin-exchange-display/remit-admin-exchange-display.component';
import { RemitAdminSupportDisplayComponent } from './components/remit-admin-support-display/remit-admin-support-display.component';
import { RemitAdminCoinsDisplayComponent } from './components/remit-admin-coins-display/remit-admin-coins-display.component';
import { RemitAdminUsersComponent } from './components/remit-admin-users/remit-admin-users.component';
import { RemitAdminComponent } from './components/remit-admin/remit-admin.component';
import { RemitAdminExchangesComponent } from './components/remit-admin-exchanges/remit-admin-exchanges.component';
import { RemitAdminCurrenciesComponent } from './components/remit-admin-currencies/remit-admin-currencies.component';
import { RemitAdminPlatformsComponent } from './components/remit-admin-platforms/remit-admin-platforms.component';
import { RemitAdminSupportComponent } from './components/remit-admin-support/remit-admin-support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RemitHeaderComponent,
    RemitHeaderQuotesComponent,
    RemitMarketTrendComponent,
    RemitMarketTrendGraphComponent,
    RemitSupportComponent,
    RemitFooterComponent,
    RemitLoginFormComponent,
    RemitRegisterFormComponent,
    RemitExchangeFormComponent,
    RemitLandingPageComponent,
    RemitAdminDashboardComponent,
    RemitAdminHeaderComponent,
    RemitAdminNavComponent,
    RemitAdminExchangeDisplayComponent,
    RemitAdminSupportDisplayComponent,
    RemitAdminCoinsDisplayComponent,
    RemitAdminUsersComponent,
    RemitAdminComponent,
    RemitAdminExchangesComponent,
    RemitAdminCurrenciesComponent,
    RemitAdminPlatformsComponent,
    RemitAdminSupportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
