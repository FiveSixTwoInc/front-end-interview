export default class ParkingLot {
    spaces = [] as Array<number | null>;

    constructor(public totalSpaces: number) {
        this.spaces = Array(this.totalSpaces).fill(null);
    }

    addCar(): number {
        // find the next empty space and add a car to it. return the index of the car added
        // if the lot is full, throw new Error("Lot is full");
        return 0;
    }

    getNumberOfParkedCars(): number {
        // return spaces that don't have null
        return 0;
    }
}