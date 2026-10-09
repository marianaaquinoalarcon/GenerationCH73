def Suma(numero1, numero2):
    return numero1 + numero2 
def Resta(numero1, numero2):
    return numero1 - numero2 
def Div(numero1, numero2):
    return numero1 / numero2 
def Mul(numero1, numero2):
    return numero1 * numero2 
def Pot(numero1, numero2):
    return numero1 ** numero2

numero1 = int(input("Ingresa numero 1 : "))
numero2 = int(input("Ingresa numero 2 : "))

print(Suma(numero1,numero2))
print(Resta(numero1,numero2))
print(Div(numero1,numero2))
print(Mul(numero1,numero2)) 
print(Pot(numero1,numero2))