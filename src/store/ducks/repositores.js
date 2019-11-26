import axios from "axios";
import React, {useState, useEffect} from "react";

export const Types = {
    LISTREPOS__ADD: "repositores/ListRepos__Add",
    LISTREPOS__DELETE: "repositores/ListRepos__Delete",
    LISTREPOS__REFRESH: "repositores/ListRepos__Refresh",
    LISTREPOS__SUBMIT: "repositores/ListRepos__Submit",
    LISTREPOS__CLEAR: "repositores/ListRepos__Clear",
    LISTREPOS__SUBMITREFRESH: "repositores/ListRepos__SubmitRefresh",
    LISTREPOS__ERRO: "repositores/ListRepos__Erro",
};

const INITIAL_STATE = {
    listRepos: [],
    mess: true,
    emptyRepo: true,
    quiz : [],
}


 export default function repositores(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case Types.LISTREPOS__SUBMIT:

                
         fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
                .then(res => { return res.json();
                })
                .then(loadedQuestions => {
                  console.log(loadedQuestions);
                  state.listRepos = loadedQuestions.map(loadedQuestion => {
                    state.listRepos.push(loadedQuestion);
                })
                console.log(state.listRepos);
//                     var i;
//                 for (i = 0; i <3; i++) {
//                 var Q1 = state.listRepos[Math.floor(Math.random() * state.listRepos.length)];


// state.quiz.push(Q1)

// console.log(state.quiz);
//                 }
                
               });
               


            return state;
        case Types.LISTREPOS__ADD:
                console.log("add",   state.listRepos)
//                 var i;
//                 for (i = 0; i <3; i++) {
//                 var Q1 = state.listRepos[Math.floor(Math.random() * state.listRepos.length)];


// state.quiz.push(Q1)

// console.log(state.quiz);
//                 }
                return state;
        case Types.LISTREPOS__DELETE:
            console.log("add", action.payload)
            // const array =
            //     state.listRepos.filter(ea => ea.id !== action.payload.idD);
            return { ...state, listRepos: [...state.listRepos.filter(ea => ea.id !== action.payload.idD)] };
        case Types.LISTREPOS__REFRESH:
            // console.log("add", action.payload.nameR.id)
            // const newArray = state.listRepos.map(e => (e.id === action.payload.nameR.id) ? action.payload.nameR : e)
            // // this.setState({ listRepos: newArray })
            // console.log("add", newArray)
            return { ...state, listRepos: [...state.listRepos.map(e => (e.id === action.payload.nameR.id) ? action.payload.nameR : e)] };
        case Types.LISTREPOS__CLEAR:
            state = { ...state, mess: true };
            state = { ...state, emptyRepo: true };
            return state;
        case Types.LISTREPOS__ERRO:
            state = { ...state, emptyRepo: false };
            return state;
        default:
            return state;

    }

}
export const Creators = {
    submitRepositor: nameRepository => ({
        type: Types.LISTREPOS__SUBMIT,
        payload: { nameRepository },
    }),
    addRepositor: repository => ({
        type: Types.LISTREPOS__ADD,
        payload: { repository }
    }),
    deleter: idD => ({
        type: Types.LISTREPOS__DELETE,
        payload: { idD }
    }),
    submitrefresh: fullnameR => ({
        type: Types.LISTREPOS__SUBMITREFRESH,
        payload: { fullnameR }
    }),
    refresh: nameR => ({
        type: Types.LISTREPOS__REFRESH,
        payload: { nameR }
    }),
    clearRepositor: () => ({
        type: Types.LISTREPOS__CLEAR,
    }),
    erro: () => ({
        type: Types.LISTREPOS__ERRO,
    })

}
