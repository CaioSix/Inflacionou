function calculo() {



    var produto = prompt("Qual dos produtos vc quer saber o preço? \n Tomate \n Abacaxi \n Limão \n Laranja ")
    var anterior = Number(prompt("Qual valor vc pagou nele semana passada?"))
    var atual = Number(prompt("Qual valor vc pagou hj?"))



    if (produto != "tomate" && produto != "abacaxi" && produto != "limao" && produto != "laranja") {
        alert("O alimento não consta em nossa lista, por favor escolha outro alimento")

    } else if (atual > anterior) {
        alert(`O alimentou ${produto} aumentou em ` + Number(atual - anterior) + "$ Reais")
    } else if (atual < anterior) {
        alert(`O alimentou ${produto} diminuiu em  ` + Number(atual - anterior) + "$ Reais")
    } else if (atual == anterior) {
        alert(`O alimento ${produto} não mudou de preço`)
    }

}