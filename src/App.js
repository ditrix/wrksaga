import React from 'react';
import {connect} from 'react-redux'
import './App.css'

import {actionUserFetchRequested, GetDogData} from './actions'

class App extends React.Component {


   onSomeButtonClicked(e) {
   	e.preventDefault()
   	console.log('clicked')
    //const { id, dispatch } = this.props.dispatch({type: 'USER_FETCH_REQUESTED', payload: 1})
    this.props.fetchUser()
  }	

  onGetDogClick(e){
    e.preventDefault()
    console.log('onGetDogClick')
    this.props.fetchDog()
  }

  render(){
  return (
    <div className="container">
      <h1>wrksaga</h1>
      <button onClick={this.onSomeButtonClicked.bind(this)}>clickme person</button>
      <div>
      {(this.props.user.loading)?<span>loading...</span>
        :(this.props.user.error)?<span>error :-(</span>
        :<div><img src={this.props.user.icon} width={150}/>&nbsp;{this.props.user.name}</div>
      }
      </div>
      <hr />
      <h1>wrk thunk</h1>
      <button onClick={this.onGetDogClick.bind(this)}>get dog</button>
      <div>
      {(this.props.dog.loading)?<span>loading...</span>
        :(this.props.dog.error)?<span>error :-(</span>
        :<img src={this.props.dog.url} width={150}/>}
      </div>

    </div>
  );}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchUser: () => dispatch(actionUserFetchRequested()) ,
    fetchDog: () =>  dispatch(GetDogData())	
  }
}

const mapStateToProps = store => {
	return{
		user: store.user,
    dog: store.dog,
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

//export default App;

//   http://kselax.ru/redux-thunk-vs-redux-saga-vs-redux-promise-2/
//  ключевая фраза
//  Saga состоит из двух функций генераторов: watcher и worker.

//  кроме исследоваиня вотчер и воркер - открыт вопрос...
//  когда несколько api  в spa ?
//