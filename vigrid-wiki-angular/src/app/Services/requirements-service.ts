import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  private requirementClickedSource = new Subject<boolean>();
  requirementClicked$ = this.requirementClickedSource.asObservable();
  private RequirementList = [
    {
      type: 'Minimum',
      os: 'Windows 7/ Windows 10/ Windows 11 (64x)',
      cpu: '2.0 GHz Dual Core',
      ram: '4GB RAM',
      gpu: 'Integrated Intel HD 4000 (Vulkan 1.2+)',
      storage: '500MB'
    },
    {
      type:'Recommended',
      os:'Windows 10/ Windows 11 (64x)',
      cpu:'2.5 GHz+ Quad Core',
      ram: '8GB RAM',
      gpu:'Nvidia GTX 960 / AMD RX 560 or better',
      storage: '1GB'
    }
  ]
  showRequirements() {
    return this.requirementClickedSource.next(true)
  }
  getRequirementList() {
  return this.RequirementList;
}
}
