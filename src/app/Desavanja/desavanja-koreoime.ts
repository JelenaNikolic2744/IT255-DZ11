/**
 * Created by Jelena on 24.5.2017.
 */
import {Pipe} from '@angular/core';

@Pipe({
    name: 'NadjiImeKoreografije'
})

export class DesavanjaKoreoIme {
    transform(value: Object[], anotherValue: string): Object[] {
        if (value == null) {
            return null;
        }
        if (anotherValue !== undefined) {
            return value.filter((item: Object) =>
                item['Ime'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1
            );
        } else {
            return value;
        }
    }
}