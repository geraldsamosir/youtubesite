import React ,{Component} from  "react"

import Layout from  "../component/layout"

import ytAction  from  "../action/youtube"

//component
import {Link} from  "../component/headers"


// list blog
export const   Listblog = class Listblog extends Component{
    constructor(props){
        super(props)
        this.state ={
            items: [],
            playlist:[]
        }
    }

    componentDidMount() {
        this.getall()
    }

    async getall(){
        let result = await ytAction.getallbychanel()
        if(result.items.length > 0){
            let {items}  = result
            if(this.props.limit == undefined){
                this.setState({
                    items  :items
                })
            }
            else{
                this.setState({
                    items  : items.slice(0,(items.length >= 6)?6:items.length)
                })
            }
            
        }
        
    }

    async getplaylist(){
        let result  = await ytAction.getbylistinchanel()
        if(result.items.length > 0){
            let {items}  = result
            if(this.props.limit == undefined){
                this.setState({
                    playlist  :items
                })
            }
            else{
                this.setState({
                    playlist  : items.slice(0,(items.length >= 6)?5:items.length)
                })
            }
            
        }
    }


    render(){

        let _items = this.state.items.map((data)=>{
            return(
                <div id={data.id.videoId} key={data.id.videoId} 
                        style={Style.grid()}>
                  
                    <Link href={"/post?id="+data.id.videoId}>
                        <img 
                            style={{
                                width :"100%" ,
                                height : 350 
                            }}
                            src={data.snippet.thumbnails.high.url} 
                            alt=""/>
                        <h2 style={{
                            color:"black",
                        }}>
                            {data.snippet.title}
                        </h2>
                    </Link> 
                  
                </div>   
            )
        })



        return(
            <div style={{display:"block"}}>
                <center>
                    <h1>List video</h1>
                </center>
                <br/>
                <div style={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}>
                    {_items}
                </div>
            </div>
        )
    }

}


//class commentslist

export const Commentlist = class Commentlist extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments : []
        }
    }


    componentDidMount(){
        this.getallcomment()
    }

    async getallcomment(){
        let result = await ytAction.getallcomment(this.props.id)

          if(result.items.length > 0){
            let {items}  = result
           
            this.setState({
                comments  :items
            })
        }
    }
    
    render(){
        let  _comments =  this.state.comments.map((data)=>{
            return(
            <li style={{
                textAlign:"left",
                width:"100%",
                padding:"2%",
                listStyle:"none",
                borderTop: "1px solid #e6e6e6",
                fontSize :"13px"
                
                }}>
                <div >
                    <div >
                        <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""
                            style={{float:"left",height:"40px",width:"40px","border-radius":"50%"}}/>
                     </div>
                     <div style={{marginLeft:"10%"}}>
                        {data.snippet.topLevelComment.snippet.authorDisplayName}
                        <br/>
                        {data.snippet.topLevelComment.snippet.publishedAt}
                        <div  dangerouslySetInnerHTML={{__html:data.snippet.topLevelComment.snippet.textDisplay}}/>
                     </div>
                      
                </div>
               
            </li>
            )
        })
        return(
            <div>
                <ul style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                   height : window.innerHeight / 1.5,
                    overflowY:"scroll",
                    }}> 
                    {_comments}
                </ul>
            </div>
        )

    }
}



// blog detail

class Blogsdetail extends Component{

    constructor(props){
        super(props)
        this.state = {
            detail : [],
        }
    }

    componentDidMount(){
        this.getdetail()
    }
    
    async getdetail(){
        let result =  await ytAction.getbyid(this.props.id)
          if(result.items.length > 0){
            let {items}  = result
           
            this.setState({
                detail  :items[0]
            })
        }
    }

    render(){
        return(
            <div style={{display:""}}>
                <p className="" style={{flex: "0 1 auto", justifyContent:"flex-start"}} >
                    <center>
                    {
                        (this.state.detail != "")?
                        <div style={{margin:"auto"}}>
                            <div style={{
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                transition: "0.3s",
                            }}>
                            <h1>{this.state.detail.snippet.title} </h1>
                            <br/>
                            <iframe src={"https://www.youtube.com/embed/"+this.props.id} 
                                style={{
                                    width:"80%",
                                    height:"500px"

                                }}/>
                             <br/>
                            
                             <p className="" >
                                  <span className="ion-thumbsup"></span>: {this.state.detail.statistics.likeCount}
                                  &nbsp;&nbsp;
                                  <span className="ion-thumbsdown"></span> : {this.state.detail.statistics.dislikeCount}
                                  <br/><br/>
                                 {this.state.detail.snippet.description}
                             </p>
                             <br/>
                             </div>
                             <Commentlist id={this.props.id}/>
                        </div>
                        :""
                        }
                        </center>
                </p>
            </div>
        )
    }
}

export default class  Posts extends Component {
    constructor(props){
        super(props)
    }


    render(){
       
        return(
            <Layout>
                {
                    (this.props.url.query.id == undefined || this.props.url.query.id == "undefined")?
                     <Listblog key={1}/>
                     :<Blogsdetail id={this.props.url.query.id}/>
                }
            </Layout>
            
        )
    }
}


export const Style  = {

    grid : ()=>{
        if(screen.width <= 767) {
            return {
                width: "calc(80%)",
                marginTop:"4%",
                padding:"2%",
                marginRight:"8%",
                marginLeft:"8%",
                boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s"
            }
        }
        else{
            return{
                width: "calc(100% / 4)",
                marginTop:"4%",
                marginRight:"4%",
                marginLeft:"4%",
                boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s"
            }
        }
    }

}