class circle{
    radius;
    circumference;
    area;
    diameter;

    /*  
        D = 2 × r
    Circumference of a Circle	C = 2 × π × r
    Area of a Circle	A = π × r2
    */

    constructor(radius){
        this.radius = radius;
        this.circumference = 2 * Math.PI * radius;
        this.diameter = 2* radius
        this.area = Math.PI * radius ** 2;
    }

    getInfo(){
        let msg = "Radius: " + this.radius + "\n" +
                    "Circumference: " + this.circumference + "\n" +
                    "Area: " + this.area + "\n" +
                    "Diameter" + this.diameter + "\n"
        console.log(msg);
    }             
}

c1 = new circle(8);
c1.getInfo();
