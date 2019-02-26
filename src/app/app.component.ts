import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'LotariaSPA';

    constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private _auth: AuthService) {
        this._router.events.subscribe((event: Event) => {
            this.navigationInterceptor(event);
        });
    }

    logout() {
      this._auth.logout();
      this._router.navigate(['login']);
    }

    private navigationInterceptor(event: Event): void {
        if (event instanceof NavigationStart) {
            this._loadingBar.start();
        }
        if (event instanceof NavigationEnd ) {
            this._loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
            this._loadingBar.stop();
        }
        if (event instanceof NavigationError) {
            this._loadingBar.stop();
        }
    }
}
