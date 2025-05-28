import Car from "../Models/Cars";
export class carServices {

    async registry(carsData: {brand: string; model: string; year: number; plate: string; chassi: string;}){
        const existingCar = await Car.count({
            where: { plate: carsData.plate},
        });
        if ( existingCar > 0) throw {status: 400, message: "Car already exists"};

        const registryCar = await Car.create(carsData);
        return Car.findByPk(registryCar.id);
    }

    async getCars(id: number) {
        const cars = await Car.findByPk(id);
        if (cars === null) throw { status: 404, message: "Veichle not found"};
        return cars;
    }

    async update(id: number, carsData: Partial<Car> ){
        const cars = await Car.findByPk(id);
        if (cars === null) throw { status: 404, message: "Not found"};

        if (carsData.plate && carsData.plate != cars.plate){
            const existingCar = await Car.findOne({
                where: { plate: carsData.plate},
            });
            if (existingCar) throw { status: 400, message: "Car already exists"};
        }

        return await cars.update(carsData);
    }

    async delete(id: number){
        const car = await Car.findByPk(id);
        if (car === null) throw { status: 404, message: "Your search dont exists"};
        await car.destroy();
    }
}


export default new carServices();