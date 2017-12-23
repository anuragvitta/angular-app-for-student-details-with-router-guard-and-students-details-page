import { Pipe, PipeTransform } from '@angular/core';
import { Iaspirants } from './interface';
import { FormsModule } from '@angular/forms';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(records: any, searchText: any ): any {
    if (searchText == null)
    {
       return records;
    }
            return records.filter(function(record){
              return record.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  });
}
}