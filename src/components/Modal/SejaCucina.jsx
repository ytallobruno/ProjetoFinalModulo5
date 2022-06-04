import React, {useState}from "react";
import familiaitaliana from "../assets/images/familiaitaliana.jpg";

export default function SejaCucina () {
 const [isModalVisible, setIsModalVisible] = useState(true)
if (setIsModalVisible === true) {
    const [pdf, setPdf] = useState(" ");
    const uploadPdf = async e=> {
        e.preventDefault();
        
    }
    return (
        <div>
        <div>
            <button className="close" onClick={onClose}/>
            <p>Venha fazer parte da Família Resili Cucina </p>
            <form onSubmit={uploadPdf}>
               <label>Arquivo em PDF:</label>
               <input type="file" name="pdf" onChange={(e => setPdf(e.target.files[0]))} 

        
            <h1>Anexe seu currículo em formato pdf</h1>
            <button/>

        </div>

        </div>

      )}

      else {
          <SobreNos onClose={()=> setIsModalVisible(false)}/>
      }
}