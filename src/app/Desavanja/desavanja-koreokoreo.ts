/**
 * Created by Jelena on 24.5.2017.
 */
import {Pipe} from '@angular/core';

@Pipe({
    name: 'NadjiKoreoKoreo'
})

export class DesavanjaKoreoKoreo {
    transform(value: Object[], anotherValue: string): Object[] {
        if (value == null) {
            return null;
        }
        if (anotherValue !== undefined) {
            return value.filter((item: Object) =>
                item['Koreograf'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1
            );
        } else {
            return value;
        }
    }
}
