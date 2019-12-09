import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from 'src/services/translate.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Pipe({ name: 'translate' })
export class Translate implements PipeTransform {
    constructor(private translateService: TranslateService) { }
    transform(value: string): Observable<string> {
        return this.translateService.getTranslatedStream(value);
    }
}

