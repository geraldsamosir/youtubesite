import React ,{Component} from  "react"

import Layout from  "../component/layout"

import ytAction  from  "../action/youtube"

import {Listblog} from "./post"

import {Listblog as Lisplay} from "./postlist"

export default class  Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            title : "",
            description: ""
        }
    }

    componentDidMount() {
        this.getbanner()
    
    }

    getbanner(){
        let _items = ""
        try {
            _items = JSON.parse(localStorage.items)  || ""    
        } catch (error) {
            
        }
        
    
        this.setState({
            items : _items.bannerImageUrl
        })
    }

    render(){
       
        return(
            
            <Layout >
                <div>
                    
                    <img src={this.state.items} 
                    style={{
                         width: "100%",
                        height: "auto"
                    }}
                    alt=""/>
                    <br/>
                    <div style={{width:"100%"}}>
                        <br/>
                        <Listblog  limit={6}/> 
                        <br/>
                        <Lisplay limit={6} />
                    </div>
                </div>  
            </Layout>
            
        )
    }
}