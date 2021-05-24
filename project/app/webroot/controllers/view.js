const

// library requiriments
fs = require("fs")

;;

module.exports = class View {

    static render(file_name){
        const path = EPaths.VIEWS + file_name;
        if(fs.existsSync(path)) return fs.readFileSync(path, 'utf8');
        return "<template><h1>404</h1></template>"
    }

}