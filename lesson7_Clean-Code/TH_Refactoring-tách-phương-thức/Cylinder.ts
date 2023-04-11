export class Cylinder {
    private static getPerimeter(radius: number) {
        let perimeter: number = 2 * Math.PI * radius;
        return perimeter;
    }

    private static getBaseArea(radius: number) {
        let baseArea: number = Math.PI * radius * radius;
        return baseArea;
    }

    public static getVolume(radius: number, height: number): number {
        let baseArea = this.getBaseArea(radius);
        let perimeter = this.getPerimeter(radius);
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}