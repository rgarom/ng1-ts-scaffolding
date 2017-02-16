import 'bootstrap-css-only';
import 'normalize.css';

import * as angular from 'angular';
import appComponent from './app.component';
import CommonModule from './common/common';
import ComponentsModule from './components/components';

angular.module('app', [
    CommonModule.name,
    ComponentsModule.name
  ])
  .component('app', appComponent);
