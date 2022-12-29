array1=[10,20,30,40]
array2=[20,30,40,50]
i=0
while i<len(array1):
    j=0
    while j<len(array2):
        if array1[i] == array2[j]:
            print(array1[i])
        j+=1
    i+=1
        
# &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

list1 = [1, 342, 75, 23, 98]
list2 = [75, 23, 98, 12, 78, 10, 1]
i=0
new_list=[]
while i<len(list1):
    if list1[i] in list2:
        new_list.append(list1[i])
    i=i+1
print(new_list)
