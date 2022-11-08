function digPow(n, p){
    n=n.toString();
    var ans=0;
    for(var i=0;i<n.length;i++){
        ans+=Math.pow(n[i], p++);
    }
    if(ans%n===0){
        var x=ans/n;
      return x;
    }
    else{return -1;}
    
  }

  
  console.log(digPow(46288, 3));