import Store from './reduxStore/Store';
import {OFFLINE} from './constants';
import {statusUpdateAction, newMessageAction} from './actions/MessageBoardActions';

const render = ()=>{
    const {messages, userStatus, apiCommunicationStatus} = Store.getState();
    document.getElementById("messages").innerHTML = messages
        .sort((a,b)=>b.date - a.date)
        .map(message=>(`
    <div> 
        ${message.postedBy} : ${message.content}
    </div>`
        )).join("");

    document.forms.newMessage.newMessage.value = "";
    document.forms.newMessage.fields.disabled = (userStatus === OFFLINE);
}

document.forms.selectStatus.status.addEventListener("change",(e)=>{
    Store.dispatch(statusUpdateAction(e.target.value));
});

document.forms.newMessage.addEventListener("submit",(e)=>{
    e.preventDefault();
    const value = e.target.newMessage.value;
    const username = "Vivek";
    Store.dispatch(newMessageAction(value, username));
});

render();

Store.subscribe(render);