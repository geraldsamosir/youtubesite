import {Router} from '../router'
import React ,{Component} from  "react"

import stylesheet from  "./style/headers.css"

const  onClickHandler = (href) =>{
  return (e) => {
    e.preventDefault()
    Router.pushRoute(href )
  }
}

export const Link =({ children, href }) => (
  <a href='#' onClick={onClickHandler(href)}
    style={{
          textDecoration : "none",
          LinkStyle : "none"}}>
    {children}
  </a>
)

export default class Headers  extends Component{
    render(){

        return(
          
            <div>

              <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
              <div style={{position:"fixed"}}>
              <input type="checkbox" id="menuToggle" />
                <div className="facebook"> <Link href='/'><h2 id="menu_title">Home</h2> </Link></div>
                <div className="twitter"> <Link href='/post'><h2 id="menu_title">Video</h2></Link></div>
                <div className="google"> <Link href='/postlist'><h2 id="menu_title">Playlist</h2></Link></div>
                 <div className="youtube"><Link href='/about'><h2 id="menu_title">About</h2></Link></div>
                <label for="menuToggle" class="menu-icon">❉</label>
              </div>
                <div style={{display:"gird",flex:1,padding:"5%",borderBottom:"1px solid rgba(0,0,0,.0975)"}}>
                    <center>
                      <h1>{this.props.title}</h1>
                    </center>
                </div>
                
            </div>
        )
    }
}



