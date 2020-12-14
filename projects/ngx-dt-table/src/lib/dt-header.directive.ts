import { Directive } from '@angular/core';

/**
 * Template used to create header containing custom html components:
 *
 * ```html
 * <dt-column field="name">
 *   <ng-template dtHeader><b>Name</b></ng-template>
 * </dt-column>
 * ```
 */
@Directive({selector: 'ng-template[dtHeader]'})
export class DtHeaderDirective {}
