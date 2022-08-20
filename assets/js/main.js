function initalize(){
    //Hiding input and output Containers
    const  outputContainerElement= document.querySelector('.output');
    if( outputContainerElement ==null)
    {
       console.log('element not found')
    }
    else
    {
        //document.querySelector('.output').style.display='none';
        outputContainerElement.style.visibility="hidden";
        document.querySelector('.input').style.visibility="hidden";
 
    }
         
       
    
}
function onButtonClick(){
    const  outputContainerElement= document.querySelector('.output');
    if( outputContainerElement ==null)
    {
       console.log('element not found')
    }
    else
    {
        //document.querySelector('.output').style.display='none';
        outputContainerElement.style.visibility="visible";
        document.querySelector('.input').style.visibility="visible";        
    }
    //create an element for asking questions
    const paraElement =  document.createElement('p');
    paraElement.textContent="Do you like to have a hot or cold coffee";
    paraElement.style.color='grey'
    const parentElement =document.querySelector('.output');
    parentElement.appendChild(paraElement);

    
    //alert('Hey I am ready to take to Orders');
    //const userResponse =prompt('Do you want hot or cold coffee');
    //console.log('userResponse::',userResponse);
    //if(userResponse==="hot"){
         
    //    prepareHotCoffee();
    //}
    //else {
    //  alert('Going to prepare Cold coffee');
 
    //    }
  }

  function prepareHotCoffee(){
    alert('Going to prepare hot coffee');
    const userResponse=prompt ('Do you want instant or filter coffee?');
    if (userResponse==="instant"){
        alert('Going to prepare instant coffee');
        }else{
        alert('Going to prepare filter coffee');
        }
  }