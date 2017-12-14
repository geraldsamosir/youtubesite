import React ,{Component} from  "react"

import Layout from  "../component/layout"



export default class  About extends Component {
    constructor(props){
        super(props)
        this.state ={
            description :"",
            Image : []
        }
    }
    
    
    componentDidMount() {
        this.getdescription()
        this.getbanner()
    }
    getbanner(){
        let _items =""
        try {
             _items = JSON.parse(localStorage.items)             
        } catch (error) {
            
        }

    
        this.setState({
            items : _items.bannerImageUrl
        })
    }
    getdescription(){
        this.setState({
            description : JSON.parse(localStorage.description) 
        })
    }
    render(){
        return(
            <Layout>
                <div>
                    <img src={this.state.items} 
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                        alt=""/>
                        <br/><br/><br/>
                        <div>
                            <div className="" style={{padding:"10%"}}>
                                {this.state.description}
                            </div>
                        </div>
                </div>
            </Layout>
            
        )
    }
}