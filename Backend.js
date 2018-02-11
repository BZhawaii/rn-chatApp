import firebase from 'firebase';

class Backend {
    uid = '';
    messagesRef = null;
    //initialize Fireabse Backend
    constructor() {
        firebase.initializeApp({
            apiKey: 'ASasdf5678SDggeDf',
            authDomain: 'meetupchat-dcbe1.fireabaseapp.com',
            databaseURL: 'https://meetupchat-dcbe1.firabaseio.com',
            storageBucket: 'meetupchat-dcbe1.appspot.com'
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setUid(user.uid);          
            } else {
                firebase.auth().signInanonymously().catch((error) => {
                    alert(error.message);
                });
            }
        });
    }
    setUid(value) {
        this.uid =value;
    }
    getUid() {
        return this.uid;
    }
    //retrieve the messages from the Backend
    loadMessages(callback) {
        this.messagesRef = firebase.database().ref('messages');
        this.messagesRef.off();
        const onReceive = (data) => {
            const message = data.val();
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    id: message.user._id,
                    name: message.user.name
                },
            });
        };
        this.messagesRef.limitToLast(20).on('child_added', onReceive);
    }
    //send the messageto the Backend
    sendMessage(message) {
        for (let i=0; i < message.length; i++) {
            this.messagesRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }
    //close the connection to the Backend
    closechat() {
        if(this.messagesRef) {
            this.messagesRef.off();
        }
    }

}

export default new Backend();