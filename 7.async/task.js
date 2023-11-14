class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.push({ time, callback, canCall: true });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const HH = now.getHours().toString().padStart(2, '0');
        const MM = now.getMinutes().toString().padStart(2, '0');
        return `${HH}:${MM}`;
    }

    start() {
        if(this.intervalId === null) {
            this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach(alarm => {
                    if(alarm.time === currentTime && alarm.canCall) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000);
        }
    }

    stop() {
        if(this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}