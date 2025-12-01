import React from "react";

class ErrorBoundry extends React.Component{


    state = {
        hasError: false
    };

    static getDerivedStateFromError(error)
    {
        return{hasError: true}
    }

    componentDidCatch(error, info){
        console.error(error);
        console.error(info);
    };

    render(){
        if(this.state.hasError){
        
        return  <h2>Congrats brother U got an error.</h2>
        
        }
        return this.props.children;
    }
}
export default ErrorBoundry;