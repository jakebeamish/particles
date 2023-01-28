let particles = [];
let body = [];

let center;

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.table(width, height);
    center = createVector(width / 2, height / 2);
    background(0);
    for (let p = 0; p < 1000; p++) {
        particles.push(new Particle);
    }
    // console.table(particles);
}

function draw() {
    background(0, 5)
    // console.table(particles[0].pos);
    for (let z = 0; z < 10; z++) {
        for (let p = 0; p < particles.length; p++) {

            particles[p].move();
            particles[p].show();
        }
        // 
    }

    // if (p5.Vector.dist(particles[p].pos, center) < 600) {
    //     body.push(particles[p]);
    //     console.table(body);
    // }





    // if (particles[p].pos.y < height/2) {
    //     particles[p].show();

    // particles[p].move();
    // }
}


class Particle {
    constructor() {
        let randomPosition = createVector(random(width), random(height));
        let randomTop = createVector(random(width), -this.r);
        this.pos = randomTop;

        this.r = 40;

        // this.r = 10;
    }
         move() {
            // // let r = floor(random(4));
            // this.dir = p5.Vector.random2D().mult(0.9);
            this.dir = createVector(2 * noise(this.pos.x * 0.01, this.pos.y * 0.01, 10 + frameCount * 0.001) - 1, 2 * noise(frameCount * 0.001, 10 + this.pos.x * 0.001, random()) - 1);
            this.dir.mult(random(10));
            this.dir.add(p5.Vector.random2D());
            this.dir.mult(0.9);
            this.pos.add(this.dir);

            // this.pos.add(createVector(0, 1));

            if (this.pos.x > width * 1.1) {
                this.pos.x = -100;
            };
            if (this.pos.x < -100) {
                this.pos.x += width * 1.1
            };

            // WRAP BOTTOM TO TOP

            if (this.pos.y > height * 1.1) {
                this.pos.y = -10;
            }
            if (this.pos.y < -10) {
                this.pos.y += height * 1.1
            };
        }

        show() {
            this.d = 2 * this.r * noise(frameCount * 0.001, this.pos.x * 0.001, this.pos.y * 0.001)

            stroke(255);
            fill(0)
            if (random() > 0.5) {
            circle(this.pos.x, this.pos.y, this.d);
            }
        }
    
}