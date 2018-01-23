import React from 'react';
import ReactDOM from 'react-dom';
import {NavBarContainer} from './navBarContainer';
import {Parameters} from '../components/parameters'
import '../styles/parameters.css';

//external ressources
import axios from 'axios';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();


export class ParametersContainer extends React.Component {
 constructor(props) {
    super(props);

    this.state={
          parametres:{
                userId:'',
                pseudo:'',
                motdepasse:'',
                email:'',
                tel:'',
                nom:'',
                prenom:'',
                adresse:'',
                ville:'',
                date_de_naissance:'',
                sexe:''

        }
      };

   this.onChangeParametres=this.onChangeParametres.bind(this);
   this.update=this.update.bind(this);
   
  }

onChangeParametres(newValue)
{
this.setState({
      parametres: Object.assign({},this.state.parametres,newValue.parametres)
    });
}
componentWillMount()
{
 let self=this;
   axios.post('http://localhost:8080/dataUser',
   {
     userId: cookies.get('userId')
   })
    .then(function (response) {
      self.setState({parametres:response.data})
    })
    .catch(function (error) {
      console.log(error);
    }); 

}

update()
{
 let self=this;
   axios.post('http://localhost:8080/updateDataUser',
   {
      userId:cookies.get('userId'),
      pseudo:this.state.parametres.pseudo,
      motdepasse:this.state.parametres.motdepasse,
      email:this.state.parametres.email,
      tel:this.state.parametres.tel,
      nom:this.state.parametres.nom,
      prenom:this.state.parametres.prenom,
      adresse:this.state.parametres.adresse,
      ville:this.state.parametres.ville,
      date_de_naissance:this.state.parametres.date_de_naissance,
      sexe:this.state.parametres.sexe
   })
    .then(function (response) {
     response.data==true? console.log("updated"): console.log("Not updated");
    })
    .catch(function (error) {
      console.log(error);
    }); 

}

  render() {
    return  (
    <div>
      <NavBarContainer/>
      <Parameters {...this.state}  onUpdate={this.update} onChangeParametres={this.onChangeParametres} />
    </div>
    )
  }
}
 