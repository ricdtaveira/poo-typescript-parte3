import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Carro} from "./entity/Carro"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database/BD_TYPEORM.db",
    synchronize: true,
    logging: false,
    entities: [User, Carro],
    migrations: [],
    subscribers: [],
})
