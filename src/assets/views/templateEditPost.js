import { templateTimeLine } from "./templateTimeLine.js";
import { postEdit } from "../js/datamodel.js";
import { observer } from "../js/auth.js";


export const templateEditPost = (doc) =>{
    observer();
    let nameProfile = validateName(); 
    document.getElementById('containersocialnetwork').innerHTML=
                        `                        
                        <nav id="navinformation">
                            <button id="btnreturntimeline">
                                <img src="assets/Images/left-arrow.png" id="returntimeline" alt="volver al muro"/>                            
                            </button>  
                        </nav>
                        <section class="templatepost">
                            <section id="userpost">  
                                <p id="posterror"></p>                          
                                <img src=""id="userphoto" alt="Foto del usuario"/>
                                <h2 id="username">${nameProfile}</h2>                                                                                
                            </section>
                            <textarea id="textpost" autofocus>${doc.data().message}</textarea>   
                            <button id="postedit">Editar</button> 
                        </section> 
                        `;

    //evento que permite ir al templateTimeLine
    document.getElementById('btnreturntimeline').addEventListener('click',()=>{
        templateTimeLine();
        window.location.hash="#/timeline";        
    })

    document.getElementById('postedit').addEventListener('click',()=>{
        postEdit(doc.id);
    })
}