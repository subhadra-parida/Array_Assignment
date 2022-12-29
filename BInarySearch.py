def binarySearch(array,start,end,number):
    if start<=end:
        middle=start+(end-start)//2
        if array[middle]==number:
            return middle
        elif array[middle]>number:
            return binarySearch(array,start,middle-1,number)
        elif array[middle]<number:
            return binarySearch(array,middle+1,end,number)
    else:
        return "Element is not there."
array=[1,2,3,4,5,6,7,8]
number=7
print(binarySearch(array,0,number-1,number))


