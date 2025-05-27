import Car from "../Models/Cars";
export class carServices {

    async create(carsData: {brand: string; model: string; year: number; plate: string; chassi: string;}){
        const existingCar = await Car.count({
            where: { plate: carsData.plate},
        });
        if ( existingCar > 0) throw {status: 400, message: "Car already exists"};

        const createdUser = await Car.create(carsData);
        return Car.findByPk(createdUser.id);
    }

    async getCars(id: number) {
        const cars = await Car.findByPk(id);
        if (cars === null) throw { status: 404, message: "Veichle not found"};
        return cars;
    }

    async update(id: number, carsData: Partial<Car> ){
        const cars = await Car.findByPk(id);
        if (cars === null) throw { status: 404, message: "Veichle not found"};

        if (carsData.plate && carsData.plate != cars.plate){
            const existingCar = await Car.findOne({
                where: { plate: carsData.plate},
            });
            if (existingCar) throw { status: 400, message: "Car already exists"};
        }

        return await cars.update(carsData);
    }

    async delete(id: number){
        const user = await Car.findByPk(id);
        if (user === null) throw { status: 404, message: "User not found"};
        await user.destroy();
    }
}


export default new carServices();