def getMin(p): 
    # maintain balance of string  
    bal=0
    ans=0
    for i in range(0,len(p)): 
        if(p[i]=='('): 
            bal+=1
        else: 
            bal+=-1
              
        # It is guaranteed bal >= -1 
        if(bal==-1): 
            ans+=1
            bal+=1
    return bal+ans 

getMin('(()))')