import AppConstants from '../config/app.constants';
import ChartDirective from './chart';
import UploadDirective from './upload';

let DirectivesModule = angular.module(
    `${AppConstants.appName}.directives`, [ ]
);

DirectivesModule
    .directive('chart', ChartDirective)
    .directive('upload', UploadDirective);

export default DirectivesModule;
