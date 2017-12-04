const PI=3.14;
function Circle(r){
    this.size = function(){
        return PI*r*r;
    };
    this.perimeter = function(){
        return 2*PI*r;
    }
}

module.exports = Circle;