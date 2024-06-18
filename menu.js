import prompt from "prompt-sync";
let ler = prompt();

export function menu (saldo){
console.log(`   Aqui estão algumas de nossas opções de menu:
1 para Depósito
2 para Saque
3 para Exibir Saldo \n
Escolha de 1 a 3 ou digite 'sair' para encerrar:`);
let meno = Number(ler());

let x = true
    if(meno == 1){
        let d = depositar(saldo)
        x = false
    }
    else if(meno == 2){
        let s = sacar(saldo)
        x = false
    }
    else if(meno == 3){
        let e = exibirsaldo(saldo)
        x = false
    }
    else{
        if(meno = 'sair'){
            x = false
        }
    }
}