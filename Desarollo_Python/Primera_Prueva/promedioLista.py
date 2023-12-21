import random as rd
import numpy as np
import statistics

lista = []
num = 1
for i in range(30):
    lista.append(rd.randint(1,20))

def multiplicarFuncion(lista, num):
    for var in lista :
        res = num * int(var)
        num = var
        print(res)

def ModaMediaMediana (Lista):
    array = np.array(Lista)
    moda = statistics.mode(array)
    media = np.mean(array)
    mediana = np.median(array)
    print("La moda es: ", moda)
    print("La media es: ", media)
    print("La mediana es: ", mediana)

multiplicarFuncion(lista, num)
ModaMediaMediana(lista)