const

// library requiriments
rss = require("./rss.js")

;;

module.exports = class Articles {


    static only_10_days(limit){
        /********************************************************
                               _        _
         _ __ ___   __ _  __ _(_) ___  | |__   ___ _ __ ___
        | '_ ` _ \ / _` |/ _` | |/ __| | '_ \ / _ \ '__/ _ \
        | | | | | | (_| | (_| | | (__  | | | |  __/ | |  __/
        |_| |_| |_|\__,_|\__, |_|\___| |_| |_|\___|_|  \___|
                         |___/
        *********************************************************/
        return {}
    }


    static only_techs(limit){
        /********************************************************
                               _        _
         _ __ ___   __ _  __ _(_) ___  | |__   ___ _ __ ___
        | '_ ` _ \ / _` |/ _` | |/ __| | '_ \ / _ \ '__/ _ \
        | | | | | | (_| | (_| | | (__  | | | |  __/ | |  __/
        |_| |_| |_|\__,_|\__, |_|\___| |_| |_|\___|_|  \___|
                         |___/
        *********************************************************/
        return {}
    }


    static all(limit){
        const
        files_array = []
        , articles = rss.articles()
        ;;
        var i=-1;
        articles.forEach(article => {
            if(!limit || limit >= articles.length || !(i++ % Math.floor(articles.length/limit))) files_array.push(article)
        })
        return files_array
    }

    static render(args){
        return args.method && this[args.method] ? this[args.method](args.limit || 50) : {}
    }

}