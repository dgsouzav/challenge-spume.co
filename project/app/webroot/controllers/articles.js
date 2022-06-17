const

// library requiriments
rss = require("./rss.js")

;;

const TEN_DAYS_TIMESTAMP = 1000 * 60 * 60 * 24 * 10

function is_ten_days_ago(timestamp){
    const now = new Date().getTime()

    return timestamp > new Date(now - TEN_DAYS_TIMESTAMP).getTime()
} 

function is_tech_article(article){
    if(article.category === "Tech"){
        return true
    } else if (article.category?.includes("Tecnologia")){
        return true
    } else if (article?.source?._?.includes("Canaltech")){
        return true
    } else if (article?.source?._?.includes("Olhar Digital")){
        return true
    } else if (article.category?.includes("Windows")){
        return true
    } else if (article.category?.includes("Linux")){
        return true
    } else if (article.category?.includes("Backup")){
        return true
    } else if (article.category?.includes("Suporte")){
        return true
    } else if (article.category?.includes("Cloud")){
        return true
    } else if (article.category?.includes("Segurança Digital")){
        return true
    } 
    return false
}

module.exports = class Articles {


    static last_10_days(limit){
        const articles = []
        let i=0;
        rss.articles().forEach(article => {
            if(is_ten_days_ago(new Date(article.pubDate).getTime()) && i < limit){
                articles.push(article)
                i++
            }
        })
        return articles
    } 


    static only_techs(limit){
        const articles = []
        let i=0;
        rss.articles().forEach(article => {
            if(is_tech_article(article) && i < limit){
                articles.push(article)
                i++
            }
        })
        return articles
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