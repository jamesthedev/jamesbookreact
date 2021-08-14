import React from 'react';
import StatusUpdater from './StatusUpdater';
import TimeLineItem from './TimeLineItem';

class TimeLine extends React.Component {
    constructor() {
        super();
        this.state = { statuses: 
            [
                { txt: "Having a lot of fun with my first React project! 😍😍😍", time: "8-14-2021 15:12:15" },
                { txt: "I have a big interview on Monday. Wish me luck!", time: "8-14-2021 15:13:53"} 
            ] 
        }
        this.addStatus = this.addStatus.bind(this);
    }

    addStatus(e) {        
        e.preventDefault();

        if (e.target[0].value === "") return;

        let today = new Date();
        let timeStamp = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear() +" " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let newStatus = {txt: e.target[0].value, time: timeStamp};

        this.setState({statuses: [newStatus, ...this.state.statuses]});
        e.target[0].value = "";
    }

    render() {
        return (
            <>
                <div className="jbLogo">jamesbook</div>
                <StatusUpdater addStatus={this.addStatus}></StatusUpdater>
                <div id="statusArea">
                {
                    this.state.statuses.map((status, index) => { 
                        return <TimeLineItem statusText={status.txt} statusTime={status.time} key={index}></TimeLineItem>
                    })
                }
                </div>
            </>
        );
    }
}

export default TimeLine;