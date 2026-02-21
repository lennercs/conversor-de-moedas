const convertButton = document.querySelector(".convert-button")
const currencyFromSelect = document.querySelector(".currency-from-select")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.22
    const euroToday = 6.20

    // Se converter DE real PARA dolar
    if (currencyFromSelect.value == "real" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    // Se converter DE real PARA euro
    if (currencyFromSelect.value == "real" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    // Se converter DE dolar PARA real
    if (currencyFromSelect.value == "dolar" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    // Se converter DE dolar PARA euro
    if (currencyFromSelect.value == "dolar" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * dolarToday) / euroToday)
    }

    // Se converter DE euro PARA real
    if (currencyFromSelect.value == "euro" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    // Se converter DE euro PARA dolar
    if (currencyFromSelect.value == "euro" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * euroToday) / dolarToday)
    }

    // Formatar o valor de origem DE ACORDO com a moeda selecionada
    if (currencyFromSelect.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyFromSelect.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencyFromSelect.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
}

function changeCurrency() {
    const currencyFromName = document.getElementById("currency-from-name")
    const currencyFromImage = document.querySelector(".currency-from-img")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    // Mudar imagem e nome DA moeda origem
    if (currencyFromSelect.value == "real") {
        currencyFromName.innerHTML = "Real brasileiro"
        currencyFromImage.src = "./assets/brasil 2.png"
    }
    if (currencyFromSelect.value == "dolar") {
        currencyFromName.innerHTML = "Dólar americano"
        currencyFromImage.src = "./assets/estados-unidos (1) 1.png"
    }
    if (currencyFromSelect.value == "euro") {
        currencyFromName.innerHTML = "Euro"
        currencyFromImage.src = "./assets/euro.png"
    }

    // Mudar imagem e nome DA moeda destino
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/brasil 2.png"
    }

    convertValues()
}

currencyFromSelect.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

