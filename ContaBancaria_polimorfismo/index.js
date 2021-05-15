// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo Insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};



Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};


Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/conta: ${this.agencia}/${this.conta} | ` +
    `Saldo: R$ ${this.saldo.toFixed(2)}`
  );
};

// criando herança da classe Conta
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo, limite);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;



ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saaldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
// herança da class Conta
function ContaPopança(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);

}
ContaPopança.prototype = Object.create(Conta.prototype);
ContaPopança.prototype.constructor = ContaPopança;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90);

console.log();

const contaPopança = new ContaPopança(12, 33, 0, 100);
contaPopança.depositar(500);
contaPopança.sacar(490);
contaPopança.sacar(10);