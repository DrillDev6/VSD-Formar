import express, {json} from "express";
import { sequelize } from "./config/database";
import { userRouter} from "./routes/userRoutes"


const app = express();
const port = 3000;

app.use(json());

app.use(userRouter);



main()

async function main(){
  if (require.main === module) {
    await sequelize.sync({ force: true}).then(()=>{
      console.log("Database is synced");
      app.listen(port, ()=>
      console.log(`Listening at http://localhost:${port}`),
    )
    });

  }
}