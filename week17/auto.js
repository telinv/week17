class Transport{
    constructor(id, type, brand, price){
      this.id = id;
      this.type = type;
      this.brand = brand;
      this.price = price;
    }
    getInfo(){
      return `Id:${this.id} , тип транспорта: ${this.type}, бренд:${this.brand}`;
    }
    getPrice(){
      return `Цена: ${this.price}`
    }
}

class Car extends Transport{
    constructor(id,brand, doors,price){
      super(id,"car",brand, price);
      this.doors = doors;
    }

    getDoorsCount(){
        return `Количество дверей ${this.doors}`
    }
}

class Bike extends Transport{
    constructor(id, brand, maxSpeed, price){
      super(id, "bike", brand, price);
      this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `Максимальная скорость: ${this.maxSpeed} км/ч`;
    }
}
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

const vehicles = data.map(item => {
  if (item.type === 'car') {
    return new Car(item.id, item.brand, item.doors, item.price);
  } else if (item.type === 'bike') {
    return new Bike(item.id, item.brand, item.maxSpeed, item.price);
  }
});

vehicles.forEach(vehicle => {
  console.log(vehicle.getInfo());
  console.log(vehicle.getPrice());
  if (vehicle instanceof Car) {
    console.log(vehicle.getDoorsCount());
  } else if (vehicle instanceof Bike) {
    console.log(vehicle.getMaxSpeed());
  }
});
