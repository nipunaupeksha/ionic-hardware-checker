import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceInfoPage } from './device-info.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceInfoPageRoutingModule {}
