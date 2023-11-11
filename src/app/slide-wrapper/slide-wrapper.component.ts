import { NgClass, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-slide-wrapper',
  templateUrl: './slide-wrapper.component.html',
  styleUrls: ['./slide-wrapper.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SlideWrapperComponent {
  @Input({ required: true }) index!: number;
  @Input({ required: true }) hovering!: number | null;
  @Input({ required: true }) left!: number;
  @Input({ required: true }) top!: number;
  @Input() markerLeft!: number;
}
