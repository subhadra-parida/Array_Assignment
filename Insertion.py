array=[89,76,45,90,42,11,21,32,23]
b=9
for i in range(1,b):
    key=array[i]
    j=i-1
    while j>=0 and key<array[j]:
        array[j+1]=array[j]
        j-=1
    array[j+1]=key
print(array)

