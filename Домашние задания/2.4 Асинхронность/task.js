class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(startTime, f) {
        if (!startTime | !f) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for(const alarm of this.alarmCollection) {
            if (alarm.time == startTime) {
                console.warn('Уже присутствует звонок на это же время');
                break;
            }
        }

        this.alarmCollection.push({
            callback: f,
            time: startTime,
            canCall: true
        });
    }

    removeClock(startTime) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != startTime);
    }

    getCurrentFormattedTime() {
        const now = new Date();

        const time = now.toLocaleString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        });

        return time;
    }

    start() {
        if (this.intervalId) {
            return;
        }

        let time = this.getCurrentFormattedTime();

        this.intervalId = setInterval(this.alarmCollection.forEach(function(alarm){
            if ((alarm.time == time) & alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
            }
        }), 1000);
    }

    stop() {
        clearInterval(this.intervalId);

        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();

        this.alarmCollection = [];
    }
}