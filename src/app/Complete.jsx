import {useState} from "react";

function Complete({
    start, onBack
                  }) {
    const [finish] = useState(new Date().getTime());

    return (
        <div className="content">
            <div className="header">
                <div className="back">
                    <div className="button" onClick={() => onBack()}>ホーム</div>
                </div>
            </div>
            <div className="congratulation">Congratulation!</div>
            <div className="time-record">タイムは{Math.floor((finish - start) / 1000)}秒でした</div>
        </div>
    );
}

export default Complete;