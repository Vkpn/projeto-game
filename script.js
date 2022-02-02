function ver(){
    var nome = document.getElementById(`txtname`)
    var fano = document.getElementById(`txtano`)
    var mail = document.getElementById(`txtemail`)
    var sel = document.getElementsByName(`estilo`)
    var res = document.getElementById(`res`)

    var email = String(txtemail.value)

    var data = new Date()
    var ano = data.getFullYear()

    if (nome.value == 0 || fano.value == 0 || fano.value >= ano || mail.value == 0){
        window.alert(`[ERRO] Preencha corretamente os dados!`)
    } else {
        
        var nome = String(txtname.value)
        var idade = ano - Number(fano.value)
        var game = ``
        var img = document.createElement(`img`) 
        img.setAttribute(`id`, `foto`)

        if (sel[0].checked) {
            game = `no Pc`
            img.setAttribute(`src`, `./imagens/pc.png`)
        } else if (sel[1].checked) {
            game = `Video Game`
            img.setAttribute(`src`, `./imagens/vg.png`)
        } else if (sel[2].checked) {
            game = `Board Games`
            img.setAttribute(`src`, `./imagens/bg.png`)
        }

        if (idade > 1) {
            var anomsg = `anos`
        } else {
            var anomsg = `ano`
        }

        res.style.textAlign = `center`
        res.innerHTML = `<p>Olá ${nome}, vemos que você é um gamer de ${idade} ${anomsg} e gosta de jogar ${game} nas suas horas vagas.</p>`
        res.appendChild(img)
        window.alert(`Muito obrigado por visitar minha página!
[Usuário: ${email}]`)
    }
}