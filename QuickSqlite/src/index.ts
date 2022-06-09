import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")

    const user1 = new User()
    user1.firstName = "João"
    user1.lastName = "da Silva"
    user1.age = 21
    await AppDataSource.manager.save(user1)
    console.log("Salvo um novo usuario com id: " + user1.id)


    const user2 = new User()
    user2.firstName = "Maria"
    user2.lastName = "Furtado"
    user2.age = 21
    await AppDataSource.manager.save(user2)
    console.log("Salvo um novo usuario com id: " + user2.id)

    console.log("Carregando usuarios do banco de dados...")
    const users = await AppDataSource.manager.find(User)
    console.log("Carregado os usuarios: ", users)

    console.log("Aqui você pode configurar e executar express / fastify / ou outro framework.")

}).catch(error => console.log(error))
