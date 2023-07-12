import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace(){

    async function createPlaceHandler(place){
        console.log(`place=${place}`);
        await insertPlace(place);
        navigation.navigate('AllPlaces');
    }

    return (            
        <PlaceForm onCreatePlace={createPlaceHandler}/>
    );
}

export default AddPlace;