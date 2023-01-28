export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const feedback = originMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, Runtime: ${((t2 - t1) / divisor)} ${unidade}`);
        };
        return descriptor;
    };
}
