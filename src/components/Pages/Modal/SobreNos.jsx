import React, {useState}from "react";
import familiaitaliana from "../assets/images/familiaitaliana.jpg";
import "./SobreNos.module.css"
import SobreNos from "./SobreNos";

export default function SobreNos () {
 const [isModalVisible, setIsModalVisible] = useState(true)
if (setIsModalVisible === true) {
    return (
        <div className="modal">
        <div className="container">
            <button className="close" onClick={onClose}/> 
            <div>
                <p>Somos um restaurante típico italiano, como toda família italiana, nosso patrono e meu pai Luigi Ricci chegou no Brasil com 10 anos de idade e logo encantou-se com o setor de alimentação trabalhando em mercearias da região que morava; na década de 60 meu pai com apoio de toda a nossa família abriu seu primero estabelecimento um sonho de trazer ao Brasil mais que um serviço de alimentação, a verdadeira motivação era mostrar aos brasileiros outra forma de amar, pois na Itália acreditamos que cozinhar para outra pessoa é demonstrar de maneira palpável o quanto se ama. Com este pensamento e impulsionados pelo desejo brasileiro de coemr bem, eu Vicenzo Ricci e minha família permanecemos com a original culinária italiana em honra ao meu pai e sua história. Aqui você encontrara deliciosas receitas 
da 'nostra famiglia' para a sua família. </p>
            </div>
            <img src="familiaitaliana.jpg"/>
        </div>

        </div>

      )}

      else {
          <SobreNos onClose={()=> setIsModalVisible(false)}/>
      }
}