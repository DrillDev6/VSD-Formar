import express from "express";
import { sequelize } from "./config/database";
import User from "./Models/Users";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});




main()

async function main(){
  if (require.main === module) {
    await sequelize.sync({ force: true}).then(()=>{
      console.log("Database is synced");
      app.listen(port, ()=>
      console.log(`Listening at http://localhost:${port}`),
    )
    });

    //create users

    const user = await User.create({name: 'Admin', email: 'admin@admin.com'});
    console.log("Users created:", user.toJSON());
  }
}