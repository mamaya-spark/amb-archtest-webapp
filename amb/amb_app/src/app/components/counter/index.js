import './counter.scss';
import CounterController from './counter.controller';

let CounterComponent = {
    bindings: {

    },
    controller: CounterController,
    controllerAs: 'ctrl_counter',
    template: require('./counter.html')
};

export default CounterComponent;
