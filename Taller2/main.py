
print("Primer actividad")
numero1 = int(input("Ingresa el primer numero: "))
numero2 = int(input("Ingresa el segundo numero: "))

print(numero1+numero2)

print("Segunda actividad")
numero3 = int(input("Ingresa el primer numero: "))
numero4 = int(input("Ingresa el segundo numero: "))

print(numero3-numero4)

print("Tercera actividad")
numero5 = int(input("Ingresa el primer numero: "))
numero6 = int(input("Ingresa el segundo numero: "))

print(numero5*numero6)

print("Cuarta actividad")
numero7 = int(input("Ingresa el primer numero: "))
numero8 = int(input("Ingresa el segundo numero: "))

print(numero7 / numero8)

print("Quinta actividad")
numero9 = int(input("Ingresa el primer numero: "))
numero10 = int(input("Ingresa el segundo numero: "))

print(numero9 % numero10)


print("Sexta actividad")
numero11 = int(input("Ingresa el primer numero: "))
numero12 = int(input("Ingresa el segundo numero: "))

print("Ingresa el numero de la operacion que deseas realizar")
print(" 1 : Suma ")
print(" 2 : Resta")
print(" 3 : Division")
print(" 4 : multiplicacion")
print(" 5 : Residuo")
operacion = int(input(" -> "))

match operacion: 
    case 1:
        print("numero11 + numero12")
    case 2:
        print("numero11 - numero12")
    case 3:
        print("numero11 / numero12")
    case 4:
        print("numero11 * numero12")
    case 5:
        print("numero11 % numero12")
    case _:
        print("Opcion no valida")



