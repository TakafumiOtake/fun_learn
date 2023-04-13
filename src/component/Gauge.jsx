function Gauge({remain, total}) {
    return (<div className="gauge">
        <div className="gauge-bar gauge-done" style={{flexGrow:total-remain}} />
        <div className="gauge-bar gauge-remain" style={{flexGrow:remain}} />
    </div>)
}

export default Gauge;