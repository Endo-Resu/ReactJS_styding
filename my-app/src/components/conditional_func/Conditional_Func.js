import { useState } from 'react';

const Tab1 = () => (
    <h1>I press some keys</h1>
)

const Tab2 = () => (
    <h1>and finally</h1>
)

const Tab3 = () => (
    <h1>it works</h1>
)

const ConditionalFunc = () => {
    const [state, setState] = useState(1);

    const handleTab = (e) => {
        setState({
            activeTab: +e.target.getAttribute('data-name'),
        })
    }
        const { activeTab } = state
        return (
            <>
                <button data-name={1} onClick={handleTab}>I am</button>
                <button data-name={2} onClick={handleTab}>too lazy</button>
                <button data-name={3} onClick={handleTab}>for styles</button>
                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3/>}
            </>
        );
}

export default ConditionalFunc;