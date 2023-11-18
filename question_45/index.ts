interface Car {
    manufacturer: string,
    model: string,
    [key:string]: any,
}
function createCar(manufacturer:string, model:string, ...args: any[]):Car{
    let car:Car = {
        manufacturer: manufacturer,
        model: model,
    }
    args.forEach(arg => {
        Object.assign(car, arg)
    })

    return car;
}

console.log(createCar("Tesla", "Model 3", {color:"red", autopilot:true}))