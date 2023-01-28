export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const feedback = originalMethod.apply(this, args);
        return feedback;
    };
    return descriptor;
}
