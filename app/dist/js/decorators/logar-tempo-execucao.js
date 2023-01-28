export function logarTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const feedback = originMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, Runtime: ${((t2 - t1) / 1000)} seconds`);
        };
        return descriptor;
    };
}
