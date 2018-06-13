import React,{Component} from 'react';


class Subscriptions extends Component{
	constructor(props){
		super(props);

		this.state = {
			email:'',
			error:false,
			success:false
		}
	}
	
	saveSubscription = (email) =>{
		const URL_EMAIL = 'http://localhost:3004/subcriptions'
		fetch(URL_EMAIL,{
			method:'post',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},

			body:JSON.stringify({email})

		}).then(res=>res.json())
		.then(()=>{
			this.setState({
				email:'',
				success:true
			})
		})
	}
	
onChangeInput = (event) =>{
	this.setState({
		email:event.target.value
	})
}

clearMessages = () => {
	setTimeout(function(){
		this.setState({
		error:false,
		success:false
	})
	}.bind(this),3000)
	
} 
handleSubmit = (event) =>{
		event.preventDefault();
		let email = this.state.email;
		let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;


		if(regex.test(email)){
            this.saveSubscription(email)
		}else{
          this.setState({error:true})
		}
		this.clearMessages();
	}



	render(){

		return(
          <div className="subscribe_panel">
          <h3>Subscribe to us</h3>
           <div>
           <form onSubmit={this.handleSubmit}>
           <input 
           type="text" 
            placeholder="youremail@email.com"
            value={this.state.email} 
            onChange={this.onChangeInput} />
            <div className={this.state.error ? "error show": "error"}>check your email</div>
            <div className={this.state.success ? "success show": "success"}>Thankyou</div>
           </form>
           </div>
           <small>Lorem ipsum</small>
           </div>
			);
	}
}
export default Subscriptions;