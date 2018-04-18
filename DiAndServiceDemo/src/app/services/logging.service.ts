export class LoggingService {
    infoLog(msg:string):void{
        console.log("Info Log: "+msg);
    }
    debugLog(msg:string):void{
        console.log("Debug Log: "+msg);
    }
}