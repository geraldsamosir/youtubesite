const configuration  = {
    key : "AIzaSyCuGd21zRRGSUYW2rvD-u14zMQXpyYG-OQ",
    channelId:"UC_ZTmAt4G3AotY5RtfDK3Pg",
    maxResults : 50,
}


const mainuri = (type)=>"https://www.googleapis.com/youtube/v3/"+type+"?key="+configuration.key

export default new  class  youtube {

    getallbychanel(){
        return fetch(mainuri("search")+"&channelId="+configuration.channelId+
        "&part=snippet,id&order=date&maxResults=50",{method:"GET"})
                .then(Response =>Response.json())
    }

    getbyid(id){
        return fetch(mainuri("videos")+"&id="+id+
            "&part=snippet,contentDetails,statistics" ,{method:"GET"})
             .then(Response =>Response.json())
    }

    getallcomment(id){
        return fetch(mainuri("commentThreads")+"&videoId="+id+
            "&part=snippet" ,{method:"GET"})
             .then(Response =>Response.json())
    }

    getbanner(){  
         return fetch(mainuri("channels")+"&id="+configuration.channelId+
            "&part=brandingSettings" ,{method:"GET"})
             .then(Response =>Response.json())
    }
    

    getbylistbylistid(id){
        
         return fetch(mainuri("playlists")+"&part=snippet,contentDetails&id="+id,{method:"GET"})
                .then(Response =>Response.json())
    }

    getlistitem(id){
           return fetch(mainuri("playlistItems")+"&part=snippet,contentDetails,id&playlistId="+id+"&maxResults=50",{method:"GET"})
                .then(Response =>Response.json())
    }

    getbylistinchanel(){
        return fetch(mainuri("playlists")+"&channelId="+configuration.channelId+
        "&part=snippet,id&order=date&maxResults=50",{method:"GET"})
                .then(Response =>Response.json())
    }

    


}
