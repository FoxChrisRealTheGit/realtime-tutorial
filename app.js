class Channel extends React.Component {
    onClick() {
        console.log(`I clicked ${this.props.name}`)
    }
    render() {
        return (
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component {
    render() {
        let channelComponents = this.props.channels.map(x => {
            return <Channel name={x.name} />
        })
        return (
            <ul>
                {channelComponents}
            </ul>
        )
    }
}


class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.updateChans({ name: this.state.input })
        this.setState({
            input: ''
        })
    }
    onChange(e) {
        this.setState({ input: e.target.value })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                    onChange={this.onChange.bind(this)} 
                    value={this.state.input} />
            </form>
        )
    }
}


class ChannelSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                { name: "Hardware Support" },
                { name: "Software Support" }],
        }
    }

    updateChans(name) {
        let tempchans = this.state.channels
        tempchans.push(name)
        this.setState({ channels: tempchans })
    }
    render() {
        return (
            <div>
                <ChannelList channels={this.state.channels} />
                <ChannelForm updateChans={this.updateChans.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection />, document.getElementById('app'))