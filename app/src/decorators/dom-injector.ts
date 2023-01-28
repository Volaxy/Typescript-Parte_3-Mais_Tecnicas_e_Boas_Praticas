export function domInjector(seletor: string) {
    // If the "target" is placed in a static property class, he return the constructor function of the class, and if is not static, returns the "prototype" of the class
    // "propertyKey" is the value passed by parameter through the decorator
    return function(target: any, propertyKey: string) {
        //console.log(propertyKey);

        console.log(`Modifing prototype ${target.constructor.name} and adding getter for the ${propertyKey}`);
        
        let element: HTMLElement;
        const getter = function() {
            if(!element) {
                element = <HTMLElement> document.querySelector(seletor);

                console.log(`Looking for ${seletor} to inject in ${propertyKey}`);
            }
            
            return document.querySelector(seletor);
        };

        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    }
}