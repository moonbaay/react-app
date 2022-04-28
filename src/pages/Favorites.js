import {useContext} from 'react'

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetup/MeetUpList';

function FavoritesPage(){
    const favoriteCtx = useContext(FavoritesContext)

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorite</p>
    }else{
        content = <MeetupList DATA={favoriteCtx.favorites}/>
    }

    return(
        <section>
            <h1>Favorites Page</h1>
            {content}
        </section>
    )
}
export default FavoritesPage;