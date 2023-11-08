import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatusFilter'
})
export class TaskStatusFilterPipe implements PipeTransform {

  transform(fireTasks: any, search: number): any {
    
    if (search === undefined) return fireTasks;

    return fireTasks.filter(
      function(fireTask: { status: number; }) {
        return fireTask.status == search
      }
    )

  }

}
