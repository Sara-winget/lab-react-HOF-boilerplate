import React,{Component} from 'react'

class DataFilter extends Component{
    constructor(){
        super()
        this.state={
            Data:[
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
  
            ],
          Display:["user Type",
            " data starting with j",
        " based on age",
          ]
        }
    }
  userType(){
    const userData=this.state.Data;
    const filtterUser=userData.filter(item=>item.user_type=='Designer');
    const mapUser=filtterUser.map((item)=>(
        <React.Fragment key={item.id}>
           <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span style={{margin:'20px'}}>Id: {item.id}</span>
                <span style={{margin:'20px'}}>Name : {item.name}</span>
                <span style={{margin:'20px'}}>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ))
       
    return mapUser;
  }
startJ(){
    const allData=this.state.Data;
    const filterJ=allData.filter(item=>item.name.startsWith('J'));
    const mapJ=filterJ.map((item)=>(
        <React.Fragment key={item.id} >
           <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                <span style={{margin:'20px'}}>Id: {item.id}</span>
                <span style={{margin:'20px'}}>Name : {item.name}</span>
                <span style={{margin:'20px'}}>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
   
    ))
    return mapJ
}


    render(){
        return(
            <React.Fragment>
              <h1 id='userType'>display based on {this.state.Display[0]}</h1>
              <ul id='userTypeul'>{this.userType()}</ul>
              <h1 id='J'>display based on{this.state.Display[1]}</h1>
              <ul id='jul'>{this.startJ()}</ul>
              
            </React.Fragment>
        )
    }
}
export default DataFilter