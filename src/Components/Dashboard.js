import React, { Component } from 'react'
import axios from 'axios'
import { Table  } from 'react-bootstrap';
import {Row,Col,} from 'antd'

export class Dashboard extends Component {
    state={
        personal:{},
        visible:false,
        company:{},
       channel:{},
       feeds:[],
       index:''
    }
    componentDidMount=async()=>{
        
        let res=await axios.get(`https://api.thingspeak.com/channels/1023166/feeds.json?api_key=A3EHCB68NAMPXWFD&results=`);
        console.log('resss',res)
        await this.setState({channel:res.data.channel,feeds:res.data.feeds})
        let count = localStorage.getItem('count')
        if(count == null && count == undefined){
            count=0
        }else{
            count=Number(count)+Number(1)
        }
        localStorage.setItem('count',count)
        await this.setState({index:count})
        if(this.state.feeds.length == this.state.count){
            localStorage.removeItem('count')
        }
        
      
        // let count = localStorage.getItem('count')
        // if(count == null && count == undefined){
        //   count=0
        // }
        // await this.setState({index:count})
        // setTimeout(function(){
        //   localStorage.setItem('count',count+1)
        //   window.location.reload()
        // }, 3000);
      
    }
   
    render() {
        return (
            <div>
            <div className='initial'>
 
                    <Row className='success'> 
                    
                    <text id='dashboard'>Dashboard</text>
                   
                    </Row>
                    <Row className='name'>
                    < Col span={4} id="device"> 
                     Device Id: {this.state.channel.id}</Col>
                     < Col span={6} id="device"> 
                     Device Name: {this.state.channel.name}</Col>
                     
                    </Row>
                    <Row className='row' >
                     
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th> Pressue</th>
                        <th> Temperature</th>
                        <th> Energy</th>
                        <th>Created Time</th>    
                    </tr>
                    </thead>
                        {this.state.feeds.map((p,i)=>
                        {if(i<=this.state.index)
                            {return(
                        <tbody>
                            <tr key={1}>
                              
                                <td>{p.entry_id}</td>
                                <td> {p.field1?p.field1:'-'}</td>
                                <td> {p.field2?p.field2:'-'}</td>
                                <td> {p.field3?p.field3:'-'}</td>
                                <td>{p.created_at}</td>
                               
                            </tr>
                     </tbody>
                       )}})}
                    
                    </Table>
                        
                </Row>
                
            </div>
            
            </div>
        )
    }
}

export default Dashboard
