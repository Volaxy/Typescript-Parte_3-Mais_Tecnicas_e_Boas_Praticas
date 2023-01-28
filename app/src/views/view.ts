import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    // @inspect() // This will be executed first, but the second decorator is called inside the first decorator
    // @logarTempoExecucao(true)
    
    @logarTempoExecucao(true) // "()" is used after the name when a parameter is passed to the decorator that is returned
    @inspect
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}