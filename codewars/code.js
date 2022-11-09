function digPow(n, p){
    n=n.toString();
    var ans=0;
    for(var i=0;i<n.length;i++){
        ans+=Math.pow(n[i], p++);
    }
    return ans%n===0?ans/n:-1;
  }
  console.log(digPow(46288, 3));