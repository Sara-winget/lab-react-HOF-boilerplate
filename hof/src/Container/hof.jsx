import React,{Component} from 'react'

class DisplayState extends Component{
    constructor(){
        super();
        this.state={
            userData:[
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}


        ]}
    }
renderItems=()=>{
    const data=this.state.userData;
    const display=data.map((item)=>(
        <React.Fragment key={item.id}>
            <li className='listElements'>
                <span style={{margin:'20px'}}>Id:   {item.id}</span>
                <span style={{margin:'20px'}}>name: {item.name}</span>
            <span style={{margin:'20px'}}>UserType: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
    return display;
}

render(){
    return(
        <React.Fragment>
            <h1>Display All Items</h1>
            <div className='displayBox'>
                <ul>{this.renderItems()}</ul>
            </div>
        </React.Fragment>
    )
}
}
export default DisplayState;

