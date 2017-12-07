import React ,{Component} from  "react"

import Layout from  "../component/layout"

import ytAction  from  "../action/youtube"

//component
import {Link} from  "../component/headers"

import {Commentlist} from "./post"


// list blog
export const  Listblog = class Listblog extends Component{
    constructor(props){
        super(props)
        this.state ={
            items: [],
            playlist:[]
        }
    }

    componentDidMount() {
        this.getplaylist()
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
                    playlist  : items.slice(0,(items.length >= 6)?6:items.length)
                })
            }
            
        }
    }


    render(){

        let _items = this.state.items.map((data)=>{
            return(
                <div id={data.id.videoId} key={data.id.videoId} 
                        style={{
                            flex:"auto",
                            display: "flex",
                            marginTop:"10%",
                            boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                            transition: "0.3s"
                        }}>
                  
                    <Link href={"/postlist?id="+data.id.videoId}>
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

        let _playlist  = this.state.playlist.map((data)=>{
            return(
                 <div id={data.id} key={data.id} 
                        style={{
                            flex:"auto",
                            display: "flex",
                            marginTop:"10%",
                            boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
                            transition: "0.3s"
                        }}>
                    <Link href={"/postlist?id="+data.id}>
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
                    <h1>List Playlist</h1>
                </center>
                <br/>
                <div style={{
                        
                        display:"grid",
                         gridTemplateColumns: "32% 32% 32% ",   
                         gridGap:"2%"
                    }}>
                    {_playlist}
                </div>
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
            items : []
        }
    }

    componentDidMount(){
        this.getdetail()
    }
    
    async getdetail(){
        let result =  await ytAction.getlistitem(this.props.id)
         
          if(result.items.length > 0){
            let {items}  = result
            this.setState({
                items  :items,
                detail :items[0]
            })
        }

    }

    changevideo(data){
        this.setState({
            detail :data
        })
    }

    render(){
        let _playlist = this.state.items.map((data)=>{
            let url = ""
            try{
                 url = data.snippet.thumbnails.standard.url
            }
            catch(e){

            }
            return (
                <li style={{display:"flex", borderTop: "1px solid #e6e6e6"}} onClick={this.changevideo.bind(this,data)}>
                    <div style={{flex:3}}>
                        <img src={url} 
                          style={{
                              height:"50px"
                          }}
                        alt=""/>
                    </div>
                    <div style={{flex:6}}>
                      {data.snippet.title}
                    </div>
                </li>   
            )
        })

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
                            <div style={{display:"flex"}}>
                                <div style={{flex:7}}>
                                <iframe src={"https://www.youtube.com/embed/"+this.state.detail.snippet.resourceId.videoId} 
                                    style={{
                                        width:"80%",
                                        height:"500px"
                                    }}/>
                               </div> 
                               <div style={{flex:3,textAlign:"left",maxHeight:"500px",overflowY:"scroll"}}>
                                    {_playlist}
                               </div>
                            </div>

                             <br/>
                             </div>
                             <Commentlist id={this.state.detail.snippet.resourceId.videoId}/>
                        </div>
                        :""
                        }
                        </center>
                </p>
            </div>
        )
    }
}

export default class  PostsList extends Component {
    constructor(props){
        super(props)
    }


    render(){
       
        return(
            <Layout>
                {
                    (this.props.url.query.id == undefined || this.props.url.query.id == "undefined")?
                     <Listblog key={1}/>
                     :  <Blogsdetail id={this.props.url.query.id}/>
                }
            </Layout>
            
        )
    }
}