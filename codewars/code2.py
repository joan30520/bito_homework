def dig_pow(n, p):
    n=str(n)
    result = 0
    for i in n :
        result += int(i)**p
        p+=1
        
    return result/int(n) if result % int(n) == 0 else -1
    
print(dig_pow(46288, 3))