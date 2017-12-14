const routes =  require('next-routes')

const _routes = routes()


//costum router have params
_routes.add('post' ,'/post/:id','post')
        .add('postlist','/postlist/:id','postlist')

    
module.exports = _routes