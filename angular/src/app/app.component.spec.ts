import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CovalentCoreModule } from '@covalent/core';
import { BackendModule } from './shared/backend/backend.module';
import { SidenavModule } from './sidenav/sidenav.module';

import { WindowService } from './shared/windowService/windowService.service';
import { LoginDataService } from './shared/backend/login/login-data-service';
import { AuthService } from './shared/authentication/auth.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [WindowService, AuthService, LoginDataService],
      imports: [
        RouterTestingModule,
        BackendModule.forRoot({environmentType: 0, restServiceRoot: 'v1'}),
        CovalentCoreModule.forRoot(),
        SidenavModule,
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
