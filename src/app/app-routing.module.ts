import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'device-info',
    pathMatch: 'full'
  },
  {
    path: 'device-info',
    loadChildren: () => import('./pages/device-info/device-info.module').then( m => m.DeviceInfoPageModule)
  },
  {
    path: 'text-to-speech',
    loadChildren: () => import('./pages/text-to-speech/text-to-speech.module').then( m => m.TextToSpeechPageModule)
  },
  {
    path: 'audio-player',
    loadChildren: () => import('./pages/audio-player/audio-player.module').then( m => m.AudioPlayerPageModule)
  },
  {
    path: 'compass',
    loadChildren: () => import('./pages/compass/compass.module').then( m => m.CompassPageModule)
  },
  {
    path: 'battery',
    loadChildren: () => import('./pages/battery/battery.module').then( m => m.BatteryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
