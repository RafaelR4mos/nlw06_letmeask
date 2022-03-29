type ButtonProps = {
  text?: string; //Interrogação indica que a propriedade é OPCIONAL nos componentes
}

//Função que acessa as propriedades do botão com a tipagem
export function Button(props: ButtonProps) {
  return (
    <button>{props.text || "Default"}</button> //Adiciona o texto ao botão que possui a propriedade, caso contrário coloca um valor default
  )
}