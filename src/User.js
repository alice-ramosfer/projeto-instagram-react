import React from "react"

export default function User(){
    const [img, setImg] = React.useState("assets/img/catanacomics.svg");
    const [nome, setNome] = React.useState("catanacomics");

    function alteraNome(){
        const nomeDigitado = prompt("Qual será o nome");
        if (nomeDigitado != "" ){
            setNome(nomeDigitado);
        }

    }

    function alteraImg(){
        const novaImg = prompt("Digite o link da imagem")
        if(novaImg != ""){
            setImg(novaImg);
        }
    }

    return(
        <>
            <img onClick={alteraImg} src={img} alt="imagem de perfil"/>
            <div className="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick= {alteraNome}></ion-icon>
                </span>


            </div>

        </>
    )
}