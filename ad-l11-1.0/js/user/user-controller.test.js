const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //  Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios
  test('Verifica que no se añadio un nuevo elemento', () => {   
    const cantUsuarios = userController.users.length; 
    let agregar = userController.add(null);
    expect(agregar).toBe(undefined); //see esta agregando nuevos usuarios por que no hay prohibicion en el push
    expect(userController.users.length).toBe(cantUsuarios); 
  });

  // Implementar 1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios.
test('Elimina usuarios que no existen', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    const cantUsuarios = userController.users.length;
    userController.remove(user);
    expect(userController.users).not.toContain(user); //consultar que no existe 
    expect(userController.users.length).toBe(cantUsuarios); //corroborar que no se borro nada 
  });

  // Implementar 2 pruebas unitarias para la función findByEmail().
  test('Busca un email que si existe',()=>{
    let userE = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(userE);  
    let consulta = userController.findByEmail(userE.email);
    expect(consulta.email).toEqual(userE.email);
  } );

  test('Busca un email que no existe',()=>{
    let userE = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(userE); 
    let consulta = userController.findByEmail('falsoemail@generation.org');
    expect(consulta).toBe(undefined); 
    //segun la literatura no es correcto quie hay indefinidosen el codigo
  } );

  // Implementar 2 pruebas unitarias para la función findById()
  test('Busca un id que si existe',()=>{
    let userE = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(userE);  
    let consulta = userController.findById(userE.id);
    expect(consulta.id).toEqual(userE.id);
  } );

  test('Busca un id que no existe',()=>{
    let userE = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(userE); 
    let consulta = userController.findByEmail(-1);
    expect(consulta).toBe(undefined); 
    //segun la literatura no es correcto quie hay indefinidos en el codigo
  } );
