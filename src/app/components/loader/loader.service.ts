import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    isLoading = new Subject<boolean>();

    show() {
        this.isLoading.next(true);
    }

    hide() {
        this.isLoading.next(true);
    }
}