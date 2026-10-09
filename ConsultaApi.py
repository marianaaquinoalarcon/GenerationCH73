import requests

respuesta = requests.get("https://jsonplaceholder.typicode.com/posts/3")

publicacion = respuesta.json()
print(publicacion)