import prompt from "prompt-sync";
let ler = prompt();


export function depositar(saldo){

    console.log('Quantos você deseja depositar');
    let depositado = Number(ler());

let x = true

    while(depositado <= 0){
        console.log('Quantos você deseja depositar');
        depositado = Number(ler());

    
    if(depositado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tld = depositado + saldo

console.log('Seu saldo atual é de: ' + tld);

    return tld
}

export function sacar(saldo){
    console.log('Quantos você deseja sacar');
    let sacado = Number(ler());

let x = true

    while(sacado <= 0){
        console.log('Quantos você deseja sacar');
        sacado = Number(ler());

    
    if(sacado == 'c' || saldo == 'c'){
        x = false
    }
}
        
let tls = saldo - sacado

console.log('Seu saldo atual é de: ' + tls);

    return tls
}

export function exibirsaldo(saldo){
    console.log(`Seu saldo atual é de: ${saldo}`);
}


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
        if(meno == 'sair'){
            x = false
        }
    }
}