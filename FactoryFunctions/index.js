const falar = {

  falar() {
    console.log(`${this.nome} está falando.`);
  },

};
const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  },

};

const comer = {

  comer() {
    console.log(`${this.nome} está bebendo`);
  },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = criaPessoa('Rafael', 'Rufino');

console.log(p2.falar());

console.log(p1.falar());
