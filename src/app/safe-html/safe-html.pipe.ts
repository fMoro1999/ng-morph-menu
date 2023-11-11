import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(
    value: any,
    type: 'html' | 'style' | 'script' | 'url' | 'resourceUrl' | 'pdf'
  ) {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      case 'pdf':
        return this.sanitizer.bypassSecurityTrustResourceUrl(
          URL.createObjectURL(value)
        );
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
