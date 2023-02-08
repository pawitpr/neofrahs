export class Log {
    static success(msg:string) {
        console.log(`%c ${msg} `, 'color:green' , 'background:purple');
        
    }
    static error(msg:string) {
        console.log(`%c ${msg} `, 'color:red' , 'background:black')
    }
    static showInfo(msg:string) {
        console.log(`%c ${msg} `, 'color:black' , 'background:green')
    }
}
