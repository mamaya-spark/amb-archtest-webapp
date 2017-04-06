import './button.scss';
import ButtonController from './button.controller';

let ButtonComponent = {
    bindings: {

    },
    controller: ButtonController,
    controllerAs: 'ctrl_button',
    template: require('./button.html')
};

export default ButtonComponent;
