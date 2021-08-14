function TimeLineItem(props) {
    return (
        <div className="statuses">
            <div className="userName">@jamesthedev </div>
            <div className="statusTxtArea">{ props.statusText }</div>
            <div className="statusTime">{ props.statusTime }</div>
        </div>
    );
}

export default TimeLineItem;