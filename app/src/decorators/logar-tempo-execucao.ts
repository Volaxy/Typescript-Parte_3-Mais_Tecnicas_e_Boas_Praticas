export function logarTempoExecucao() {
    // Every decorator function needs to declare this sintax of return
    return function(
        target: any, // If is implement in a non static method, the target is the "prototype" of the class, and if the function is static, return the class constructor
        propertyKey: string, // Is the method name as the string that was decored
        descriptor: PropertyDescriptor // Is everthing about the method to will be executed
    ) {
        const originMethod = descriptor.value; // Store the original method in which the decorator was called
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now(); // Records the performance of a specific snippet
            const feedback = originMethod.apply(this, args); // Call the original method | The "this" is the class that implement the decorator
            const t2 = performance.now();
            console.log(`${propertyKey}, Runtime: ${((t2 - t1) / 1000)} seconds`);
        };

        return descriptor;
    }
}