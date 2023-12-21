import random as rd
lista = []
num = 0
for i in range(10):
    lista.append(rd.randint(1,20))

def multiplicarFuncion(lista, num):
    for var in lista :
        res = num * int(var)
        num = var
        print(res)

multiplicarFuncion(lista, num)

