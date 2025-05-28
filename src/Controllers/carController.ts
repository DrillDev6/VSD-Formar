import {Request, Response} from "express";
import carServices from "../Services/carService";


export const registryCar = async (req: Request, res: Response) => {
    const user = await carServices.registry(req.body);
    res.status(201).json(user);
};


export const getCarById = async (req: Request, res: Response) => {

    const car = await carServices.getCars(parseInt(req.params.id));
    res.status(200).json(car);
};

export const updateCar = async (req: Request, res: Response) => {
    await carServices.update(parseInt(req.params.id), req.body);
    res.status(204).json()
}; 


export const deleteCar = async (req: Request, res: Response) => {
    await carServices.delete(parseInt(req.params.id));
    res.status(204).send();
};