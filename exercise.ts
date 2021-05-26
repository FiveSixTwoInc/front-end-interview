import ParkingLot from "./ParkingLot";

// running application. do not modify.
console.log("Exercise running!");

const overFillLot = () => {
    let errorThrown = false;
    const lot1 = new ParkingLot(100);
    for (let index = 0; index < 101; index++) {
        try {
            lot1.addCar();
        } catch (error) {
            console.error(error);
            errorThrown = true;
        }
    }

    if (errorThrown !== true) {
        console.log("Test failed, error should have been thrown");
    }

    console.log("Lot spaces occupied: ", lot1.getNumberOfParkedCars());
    console.log("Lot: ", lot1.spaces);
};

overFillLot();