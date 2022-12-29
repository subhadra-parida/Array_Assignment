array = [2, 8, 4, 56, 21,90, 5,1, 9]
n = 9
for i in range(0,n):
    for j in range(i,n):
        if array[i]>array[j]:
            array[i],array[j]=array[j],array[i]
print(array)
if n % 2 == 0:
    median1 = array[n//2]
    median2 = array[n//2 - 1]
    median = (median1 + median2)/2
    print(median)
else:
    median = array[n//2]
    print(median)
    
