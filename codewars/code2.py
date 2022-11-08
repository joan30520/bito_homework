import math 
def dig_pow(n, p):
    n=str(n)
    result = 0
    for i in n :
        result += math.pow(int(i),p)
        p+=1
        
    if result % int(n) == 0 :
        return result/int(n)
     
    return -1 
  
print(dig_pow(46288, 3))