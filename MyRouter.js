function route(pathname, handle, res) {
    console.log('Routing request for ' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](res)        ;
    }
    else{
        console.log('404 not Found' + pathname);
        reswriteHead(404, {' Content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }
  }
  
  exports.route = route;