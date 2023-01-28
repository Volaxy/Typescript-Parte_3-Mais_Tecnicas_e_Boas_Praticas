export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modifing prototype ${target.constructor.name} and adding getter for the ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
                console.log(`Looking for ${seletor} to inject in ${propertyKey}`);
            }
            return document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
