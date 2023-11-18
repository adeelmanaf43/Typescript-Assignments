function createCar(manufacturer, model, ...args) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    args.forEach(arg => {
        Object.assign(car, arg);
    });
    return car;
}
console.log(createCar("Tesla", "Model 3", { color: "red", autopilot: true }));
export {};
