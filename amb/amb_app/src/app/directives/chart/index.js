import './chart.scss';

function ChartDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./chart.html'),
        link: function(scope, el, attrs) {

        }
    }
}

export default ChartDirective;
