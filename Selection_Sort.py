a=[21,89,90,12,34,5,7,1,23]
b=9
for i in range(b):
    min=i
    for j in range(i+1,b):
        if a[min]>a[j]:
            min=j
    a[i],a[min]=a[min],a[i]
print(a)


