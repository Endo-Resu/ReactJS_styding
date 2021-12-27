import { Fragment, Component } from 'react';

const Tab1 = () => (
    <h1>I press some keys</h1>
)

const Tab2 = () => (
    <h1>and finally</h1>
)

const Tab3 = () => (
    <h1>it works</h1>
)

class ConditionalClass extends Component {

    state = {
        activeTab: 1,
    }

    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name'),
        })
    }

    render() {
        const { activeTab } = this.state
        return (
            <Fragment>
                <button data-name={1} onClick={this.handleTab}>I am</button>
                <button data-name={2} onClick={this.handleTab}>too lazy</button>
                <button data-name={3} onClick={this.handleTab}>for styles</button>
                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3/>}
            </Fragment>
        );
    }
}

export default ConditionalClass;
