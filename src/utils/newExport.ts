import console = require('console')

export = {
    a: 100,
    b: function(x: number,y: string){return x+y},
}

class AA{
    [x: string]: any,
    ['move']: ()=>void
}

new AA().a

enum YYY{

}

namespace YYY{
    
}
// interface YYY{}