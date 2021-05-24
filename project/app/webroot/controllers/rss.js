const

// constant declarations
RSS_ASSETS = EPaths.ASSETS + "rss/"

// library requiriments
, fs = require("fs")
, xtoj = require("xml2js")
, utf8 = require("utf8")
, parser = new xtoj.Parser({ explicitArray: false })

;;

module.exports = class Rss {

    static list(){
        return fs.readdirSync(RSS_ASSETS)
    }
    
    static get(file_name){
        const path = RSS_ASSETS + file_name;
        var item;
        try{
            parser.parseString(fs.readFileSync(path, 'utf8'), (err, res) => item = res);
        } catch(err){ }
        
        return item;
    }

    static articles(){
        const
        items = []
        ;;
        this.list().forEach(file => {
            try{
                this.get(file).rss.channel.item.forEach(item => items.push(item));
            } catch(err){ }
        });
        return items
    }

}