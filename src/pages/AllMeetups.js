import MeetupList from "../components/meetup/MeetUpList";
import { useState,useEffect } from "react";


function AllMeetupsPage(){
  const [isLoading,setIsLoading] = useState(true)
  const [loadedMeetups, setIsLoadedMeetups] = useState([])

  useEffect(()=>{
    setIsLoading(true)
        fetch(
          "https://react-project-meetup-99d31-default-rtdb.firebaseio.com/meetups.json"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const meetups = []

            for(const key in data){
              const meetup ={
                id:key,
                ...data[key]
              }
              meetups.push(meetup)
            }
            setIsLoading(false);
            setIsLoadedMeetups(meetups);
          });
  },[])


  if(isLoading){
    return <section>
      <p>loading....</p>
    </section>
  }
    return (
      <section>
        <h1>All Meetup Page</h1>
        <div>
          <MeetupList DATA = {loadedMeetups}/>
        </div>
      </section>
    );
}

export default AllMeetupsPage;