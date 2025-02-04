import React from 'react';

import Input from '../Components/Input'
import Button from '../Components/Button'
import Subtitle from '../Components/Subtitle'

class Formulaire extends React.Component{
    constructor(props){
        super(props);
    }
    click(event){
        event.preventDefault();
        let Tableau=event.target.elements;
        let data={};
        Tableau = Array.from(Tableau).map(element=>{
            data[element.name]=element.value;
        })
        this.props.submit(data);
    }

    handleChange = (e) =>{
        console.log(e);
    }

    render(){
        console.log(this.props.contactToEdit.nom);
        return(
            <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-notification-enter" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <Subtitle content="Formulaire"/> 
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={this.click.bind(this)}>
                                <Input placeholder="Nom" name="nom"  value={this.props.contactToEdit.nom} handleChange={this.handleChange} />
                                <Input placeholder="Prénom" name="prenom" value={this.props.contactToEdit.prenom} handleChange={this.handleChange} />
                                        
                                <div className = 'form-group'>
                                        <select name="groupe" placeholder="Groupe" className = 'form-control'
                                        defaultValue={this.props.contactToEdit.groupe}>
                                            <option>Ami</option>
                                            <option>Famille</option>
                                            <option>Pro</option>
                                        </select>
                                </div> 
                                <div className = 'form-group'> 
                                    <textarea name="bio" placeholder="Bio" className = 'form-control'
                                    defaultValue={this.props.contactToEdit.bio}></textarea>
                                </div> 
                                
                                <div className = 'form-group'>
                                    <input name="file" type="file" className = 'form-control'></input>
                                    <div className="photo"></div>
                                </div>
                                <Button type="submit" content="Créer" className = 'btn btn-primary mr-2'/>
                                <Button type="reset" content="Initialiser" className = 'btn btn-danger'/>
                                
                            </form>
                        
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}
export default Formulaire