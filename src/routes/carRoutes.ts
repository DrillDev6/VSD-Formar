import {Router} from "express";
import {
    registryCar,
    getCarById,
    updateCar,
    deleteCar

} from '../Controllers/carController'

export const carRouter = Router()

.get("/cars/:id", getCarById)
.post("/cars/registry", registryCar)
.patch("/update-car/:id", updateCar)
.delete("/delete-car/:id", deleteCar);
