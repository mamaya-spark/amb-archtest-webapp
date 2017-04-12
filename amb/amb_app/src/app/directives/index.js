import ChartDirective from './chart';
import UploadDirective from './upload';

let DirectivesModule = angular.module(
    'app.directives', [ ]
);

DirectivesModule
    .directive('chart', ChartDirective)
    .directive('upload', UploadDirective);

export default DirectivesModule;
