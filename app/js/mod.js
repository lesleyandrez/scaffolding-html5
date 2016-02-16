export function mult(ref = 'ha'){
  return (function(ref) {
    let result = "";
    for(let i = 0; i <= 10; i++){
      result += ref;
    }
    return result;
  })(ref);
};

export var complex = {
  num: 0,
  add: function(){
    return this.num++;
  },
  reset: function(){
    this.num = 0;
    return 'reset';
  }
};

export default function(){
  return 'Módulo ES6';
};
