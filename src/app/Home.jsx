function Home({onModeChange}) {
    return (
        <div className="mode-list">
            <div className="mode-button button" onClick={()=> onModeChange("add")}>たしざん</div>
            <div className="mode-button button" onClick={()=> onModeChange("katakana")}>かたかな</div>
        </div>
    );
}

export default Home;