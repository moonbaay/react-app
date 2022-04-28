import {useHistory} from 'react-router-dom'

import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetup(){ 
  const history = useHistory()
  
  //where you send https request
  function addMeetupHandler(meetupData){
 
                                                              //firebase require .json
    fetch(
      "https://react-project-meetup-99d31-default-rtdb.firebaseio.com/meetups.json",
        {
          method: 'POST',
          body:JSON.stringify(meetupData),
          headers:{
            'Content-Type': 'application/json'
          }
        }
      
      ).then(()=>{
        history.replace("/")
      })

  }
    return (
      <section>
        <h1>New Meetup page</h1>
        <NewMeetupForm onAddMeetUp={addMeetupHandler}/>
      </section>
    );
}

export default NewMeetup;