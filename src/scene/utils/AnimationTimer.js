class AnimationTimer {

    constructor(callback) {
        this.callback = callback;
        this.running = false;
        this.id = -1;
    }

    start() {
        if (this.running) return;
        this.running = true;

        const self = this;
        function loop() {
            self.callback();
            if (self.running) self.id = requestAnimationFrame(loop);
        }
        loop();
    }

    stop() {
        this.running = false;
        cancelAnimationFrame(this.id);
    }

}

export { AnimationTimer };
