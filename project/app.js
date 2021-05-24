const
fs = require("fs")
, express = require('express')
, parser = require('body-parser')
, app = express()
, ROOT = __dirname + "/"
;;

global.EPaths = {
    APP:            ROOT + "app/"
    , ASSETS:       ROOT + "app/assets/"
    , WEBROOT:      ROOT + "app/webroot/"
    , VIEWS:        ROOT + "app/webroot/views/"
    , CONTROLLERS:  ROOT + "app/webroot/controllers/"
}

app.use(parser.json())
app.all('*', (req, res) => {

    var path = '';
    if(req.params && req.params[0]) path += req.params[0];
    if(path=="/") path = "index.html";  

    if (req.method != "POST"){
        [ EPaths.APP, EPaths.ASSETS, EPaths.WEBROOT, EPaths.VIEWS, EPaths.CONTROLLERS ].forEach(prefix => {
            if(fs.existsSync(prefix + path)) return res.sendFile(prefix + path);
        })
    }else if(req.method == "POST"){
        try{
            const
            cls_arr = req.params[0].split('/').filter(e => e)
            , cls = cls_arr[0].slice(0,1).toUpperCase() + cls_arr[0].slice(1)
            , fn = cls_arr[1] || "render"
            , others = cls_arr.length > 2 ? { uri: cls_arr.slice(2) } : {}
            final = require(EPaths.CONTROLLERS + cls + ".js")
            ;;
            res.send(final[fn](req.body || others));
        }catch(e){ console.log(e) }
    }

});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});