export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const feedback = originalMethod.apply(this, args);

        return feedback;
    }

    return descriptor;
}