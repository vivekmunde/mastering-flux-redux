import {ControlPanelStore} from './store';
import {ControlPanelDispatcher} from './dispatchers';
import {userNameUpdate, fontSizePreferenceUpdate} from './actions/ControlPanelActions';

document.getElementById('userNameInput').addEventListener('input', ({target}) => {
    const name = target.value;
    const action = userNameUpdate(name);
    console.log('Dispatching text change ...', action);
    ControlPanelDispatcher.dispatch(action);
});

document.forms.fontSizeForm.fontSize.forEach(element => {
    element.addEventListener('change', ({target}) => {
        const action = fontSizePreferenceUpdate(target.value);
        console.log('Dispatching font change ...', action);
        ControlPanelDispatcher.dispatch(action);
    })
});

ControlPanelStore.addListener((state) => {
    console.info('Current state is', state);
    render(state);
});

const render = ({userName, fontSize}) => {
    document.getElementById('userName').innerText = userName;
    document.getElementsByClassName('container')[0].style.fontSize = (fontSize === 'small' ? '16px' : '24px');
    document.forms.fontSizeForm.fontSize.value = fontSize;
}

render(ControlPanelStore.getUserPreferences());