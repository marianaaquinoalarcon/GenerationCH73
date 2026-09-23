def main():
  bucle = 0
  print("Hello")
  print("Ingresa la operacion que quieres realizar")
  print("  1 : Suma")
  print("  2 : Multiplicacion")
  print("  3 : Par")
  print("  4 : Entero")
  opcion = int(input("  ->  "))
  while (bucle != 1):
     match opcion:
        case 1:
           n = int(input("ingrese la cantidad de numeros a sumar : "))
           lst = createList(n)
           rst = addmultiplenumbers(lst)
           print(rst)
           bucle = 1
        case 2:
           n = int(input("ingrese la cantidad de numeros a multiplicar : "))
           lst = createList(n)
           rst = multiplymultiplenumbers(lst)
           print(rst)
           bucle = 1
        case 3:
           num = int(input("Ingresa el numero que quieres comprobar : "))
           res = isiteven(num)
           print(res)
           bucle = 1
        case 4:
           num = int(input("Ingresa el numero que quieres comprobar : "))
           res = isitaninteger(num)
           print(res)
           bucle = 1
        case _:
           print("Respuesta no valida")


def createList(n):
    lst = []
    print("Ingrese los numeros de uno en uno")
    for j in range(1,n + 1):
        lst.insert(j, int(input(" : ")))
    return lst

def addmultiplenumbers(lst):
   #debe recibir una lista de números como entrada y devolver la suma de dichos números.      
   rst = sum(lst)
   return rst

def multiplymultiplenumbers(lst): 
   #debe recibir una lista de números como entrada y devolver el resultado de multiplicar 
   # # cada número por el siguiente sucesivamente.
   import math
   rst = math.prod(lst)
   return rst
  
def isiteven(num): 
  #debe recibir un único número como entrada y devolver un valor booleano: `True` 
  # si el número es par y entero, y `False` en caso contrario
  if (num % 2 == 0):
     return True
  else:
     return False

def isitaninteger(num): 
  #esta función debe existir en tu programa; debe recibir un único número como entrada 
  # y devolver un valor booleano: `True` si el número es un entero, y `False` en caso contrario.
  if (num.isintance()):
     return True
  else:
     return False

if __name__=="__main__":
  main()