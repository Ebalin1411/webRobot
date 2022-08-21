function initalize(){
    //Hiding input and output Containers
    const  outputContainerElement= document.querySelector('.output');
    if( outputContainerElement ==null){
       console.log('element not found')
    }
    else{
        outputContainerElement.style.visibility='hidden';
        document.querySelector('.input').style.visibility='hidden';
        }
    }    
    
function onKeyPress(event){
    console.log('Key pressed', event.key);
    if (event.key === 'Enter'){
        const inputElement = document.querySelector('.input input');
        const userResponse = inputElement.value;        
        console.log('User Entered', userResponse);
        if(userResponse ==='hot'){
            prepareHotCoffee();
        } 
        else if(userResponse === 'cold'){
            prepareColdCoffee();
        } 
        else if(userResponse === 'instant'){
            prepareInstantCoffee();
        } 
        else{
            console.log('Please Enter hot or cold')    
        }
        
    }

}

function onButtonClick(){
    const  outputContainerElement= document.querySelector('.output');

    if( outputContainerElement ==null){
       console.log('element not found')
    }
    else{        
        outputContainerElement.style.visibility='visible';
        document.querySelector('.input').style.visibility='visible';        
    }
    //create an element for asking questions
    const paraElement =  document.createElement('p');
    paraElement.textContent="Do you like to have a hot or cold coffee";
    paraElement.style.color='grey'
    const parentElement =document.querySelector('.output');
    parentElement.appendChild(paraElement);
    // get input from user
    const inputElement= document.querySelector('.input input');
    inputElement.addEventListener('keydown',onKeyPress)

  }

  function prepareHotCoffee(){
    
    document.querySelector('.output span').textContent ="Going to prepare hot coffee";
    const paraElement = document.querySelector('.output p');
    paraElement.textContent = 'Do you want instant or filter coffee?';

    const inputElement = document.querySelector('.input input');
    inputElement.value =''
    
    
    const userResponse = inputElement.value; 

    if (userResponse==="instant"){        
        prepareInstantCoffee();
        }else{
        prepareFilterCoffee();
        }
  }
  
  function  prepareInstantCoffee(){
    document.querySelector('.output span').textContent ="Going to prepare Instant coffee";
    document.querySelector('.output p').style.visibility ='hidden';
    document.querySelector('.input').style.visibility='hidden';
  }
  
  function prepareFilterCoffee(){

  }

  function prepareColdCoffee(){

}