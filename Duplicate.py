# a=[1,2,3,2,2]
# i=0
# b=[ ]
# while i<len(a):
# 	if a[i] not in b:
# 		b.append(a[i])
# 	i=i+1
# print(b)

arr = [3,5,2,2,1,4,3,5,6,3,2,1,8,9]     
a=14
for i in range(0, a):    
    for j in range(i+1, a):    
        if(arr[i] == arr[j]):    
            print(arr[i])
            