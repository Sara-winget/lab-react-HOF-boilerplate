import React,{Component} from 'react';
class Total extends Component{
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
userType(){
    const userData=this.state.Data;
    const filtterUser=userData.filter(item=>item.user_type=='Designer');
    const Total=filtterUser.reduce((sum,item)=>sum+item.years,0)

    return Total;
  }
  render(){
    return(
        <React.Fragment>
            <h1>Display Experiance
                <br>
                {this.userType()}
                </br>
            </h1>
            
            
        </React.Fragment>
    )
}
}
export default Total;



