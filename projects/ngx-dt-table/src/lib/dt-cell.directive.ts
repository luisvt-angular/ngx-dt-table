import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Template used to create cell containing custom html components:
 *
 * ```html
 * <dt-column>
 *   <ng-template dtCell let-player="item"><b>{{player.name}}</b></ng-template>
 * </dt-column>
 * ```
 *
 * or:
 * ```html
 * <dt-column>
 *   <div *dtCell="let player=item"><b>{{player.name}}</b></ng-template>
 * </dt-column>
 * ```
 */
@Directive({selector: 'ng-template[dtCell]'})
export class DtCellDirective {}
