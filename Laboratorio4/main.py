import requests #imortando base de datos en el servidor en la nube

def main(): 
  print("Hello learners!")
  numero = int(input("¿Cuántas preguntas quieres?  ->  "))
  trivia = trivia_fetch(numero)
  print(trivia)

def trivia_fetch(num): #funcion que consulta los datos 
  url = f"https://opentdb.com/api.php?amount={num}" #curl del servidor
  response = requests.get(url) #funcion de consulta
  trivia = response.json() # transformacion de consulta en listado json
  return(trivia)  #regreso de los datos 

if __name__=="__main__":
  main()