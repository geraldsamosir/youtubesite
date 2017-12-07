import React ,{Component} from  "react"

import Headers  from  "./headers"
import ytAction  from  "../action/youtube"


export default class  Layout extends Component {
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

    async getbanner(){
        let result = await ytAction.getbanner()
         if(result.items.length > 0){
            let {items}  = result
            this.setState({
                items  :items[0].brandingSettings.image,
                title : items[0].brandingSettings.channel.title,
                description: items[0].brandingSettings.channel.description
            })
            localStorage.setItem("items",JSON.stringify(items[0].brandingSettings.image) )
             localStorage.setItem("description",JSON.stringify(items[0].brandingSettings.channel.description))
        }
    }


    render(){  
       
        return(
            <div>
                <Headers title={this.state.title}/>
                {React.cloneElement(this.props.children, { ...this.state})}
                <footer style={{ flexDirection: "row"}}> 
                    <center>
                        &copy; 2017  {this.state.title}
                    </center>
                </footer>
            </div>
        )
    }
}