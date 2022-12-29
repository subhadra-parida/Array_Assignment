# Bubble Sort ---------------------

array =[21,89,90,12,34,5,7,1,23,98,66]
length=11
for i in range(length):
    for j in range(i, length):
        if(array[i] > array[j]):
            array[i], array[j] = array[j], array[i]
print(array)