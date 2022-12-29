array1=[21,31,41,51,61,71]
array2=[11,22,44,55,77,99]
lenArray1 = 6
lenArray2 = 6
merge = array1+array2
# print(merge)
lenmerge = 12
for i in range(lenmerge):
    for j in range(i, lenmerge):
        if(merge[i] > merge[j]):
            merge[i], merge[j] = merge[j], merge[i]
print(merge)


