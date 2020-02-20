import React, {Component} from 'react';
import Header from './Header';

class HeaderContainer extends Component {
  constructor(props){
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount(){
    this.timeID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick(){
    this.setState({ date: new Date() })
  }

  render(){
    return <Header state={this.state}/>
  }
}

export default HeaderContainer;
