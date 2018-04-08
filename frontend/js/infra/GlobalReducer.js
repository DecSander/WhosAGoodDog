import { Record, List } from 'immutable';
import { requestMoreBreeds, sendLike, sendDislike, sendResetBreeds } from 'infra/api';
import { updatePreference } from 'infra/GlobalActions';
import { preferencesDefault } from 'infra/const';

const Breed = Record({
  name: '',
  img: ''
});

const Preferences = Record(preferencesDefault);

const GlobalState = Record({
  currentBreeds: List(),
  liked: List(),
  preferences: new Preferences(),
  breedsInfiniteLoading: false,
  likedLoading: false,
  checkPreferences: false
});

function buildDog(breed) {
  return new Breed({
    name: breed.dog_name,
    img: List(breed.images)
  });
}

const initialState = new GlobalState();

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
  case 'LIKE_BREED': {
    const current = state.currentBreeds.get(action.breed_number);
    sendLike(current.name);
    return state
      .set('currentBreeds', state.currentBreeds.splice(action.breed_number, 1))
      .set('liked', state.liked.push(current));
  }
  case 'UPDATE_PREFERENCE':
    localStorage[action.field] = JSON.stringify(action.value);
    return state
      .setIn(['preferences', action.field], action.value);
  case 'CHANGE_CHECK_PREFERENCES':
    return state
      .set('checkPreferences', action.selected);

  case 'REQUEST_BREEDS_START':
    return state
      .set('breedsInfiniteLoading', true);
  case 'RECEIVE_BREEDS':
    return state
      .set('breedsInfiniteLoading', false)
      .set('currentBreeds', state.currentBreeds.concat(List(action.breeds).map(buildDog)));
  case 'REQUEST_BREEDS_FAILED':
    return state
      .set('breedsInfiniteLoading', false);

  case 'REQUEST_LIKED_START':
    return state
      .set('likedLoading', true);
  case 'RECEIVE_LIKED':
    return state
      .set('likedLoading', false)
      .set('liked', state.liked.concat(List(action.dogs).map(buildDog)));
  case 'REQUEST_LIKED_FAILED':
    return state
      .set('likedLoading', false);
  case 'RESET_BREED_LIST':
    sendResetBreeds();
    return state
      .set('currentBreeds', List());
  default:
    return state;
  }
}
