import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(fireTasks: any, search: any): any {
    
    if (search === undefined) return fireTasks;

    return fireTasks.filter(
      function(fireTask: { text: string; }) {
        return fireTask.text.toLowerCase().includes(search.toLowerCase())
      }
    )

  }

}
