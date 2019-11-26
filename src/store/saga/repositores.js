import { call, put} from "redux-saga/effects";
import api from '../../api';
import { Creators as RepositoryActions } from "../ducks/repositores";
import axios from "axios";

export function* addRepositores(action) {

    
    try {
const { info } = yield call(api.get, `/0.2.0/api/all.json`);
        
//   axios.get(`/api/2467363743480099/${action.payload.nameRepository}`).then(res => {
              
        //       console.log("Objeto retornado", res.data)
              
              
        //    return RepositoryActions.addRepositor(res.data);
        //     });
        const data = [];
        data = info.map(loadedQuestion => {
            data.push(loadedQuestion);
        })

        yield put(RepositoryActions.addRepositor(data));


    } catch (err) {
        console.log('erro', err);
        yield put(RepositoryActions.erro());
        // state = { ...state, emptyRepo: !state.emptyRepo }

        // this.setState({ emptyRepo: !this.state.emptyRepo })
        // setTimeout(() => {
        //     this.setState({ emptyRepo: !this.state.emptyRepo });
        // }, 3000);
    }
}
// fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
// .then(res => { return res.json();
// })
// .then(loadedQuestions => {
//   console.log(loadedQuestions);
//   state.listRepos = loadedQuestions.map(loadedQuestion => {
//     this.state.listRepos.push(loadedQuestion);
//     return state;
// });});
export function* submitrefresh(action) {
    try {
        const { data } = yield call(api.get, `/api/2467363743480099/${action.payload.fullnameR}`);
        yield put(RepositoryActions.refresh(data));
    } catch (err) {
        console.log('erro', err);
        yield put(RepositoryActions.erro());
    }

}