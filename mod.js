function A(){
    this.foo="hello";
}

if(!global._foo){
    golbal._foo=new A();
}

module.exports=global._foo;