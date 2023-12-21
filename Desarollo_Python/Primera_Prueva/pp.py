var1texto = 'texto'
var1textoNum = '26'
var2caracter = 'c'
var3entero = 22
var4double = 25.55

print(int(var1textoNum) + var3entero)

def funcionSuma():
    return var3entero + var4double

print(funcionSuma())

def funcion():
    a = 2
    b = [2,3,4,5,6,7,8,9,10]
    c = 'numeros'
    return a, b, c

num1, num2, num3 = funcion()
print(num1, num2, num3)

def resta(a=2, b=3):
    return a - b

print(resta())
resta(5, 2)
print(resta())
resta(4)
print(resta())