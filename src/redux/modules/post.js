import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// 액션
const SET_TODO = "SET_TODO";
const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

// 초기값
const initialState = {
  review : [
    {

  }
  ],
};

const initialPost = [{

}]

// 액션 생성 함수
const getTodo = createAction(SET_TODO, (post) => ({post}));
const addTodo = createAction(ADD_TODO, (post_list) => ({post_list}));
const deleteTodo = createAction(DELETE_TODO, (planId) => ({ planId }));
const editTodo = createAction(EDIT_TODO, (planId, post_list) => ({planId, post_list}));


// 미들웨어
const addTodoFB = (title, content, stars ) => {
  return function (dispatch, getState, {history}) {
    axios.post("", {

    },
    // {headers: { 'Authorization' : `Bearer ${myToken}`}}
    )
    .then(
      dispatch(addTodo({title, content, stars}))
    )
    .catch(error => {
      console.log("어림없어", error)
    })
  }
}

// 리듀서
export default handleActions(
  {
    [SET_TODO]: (state, action) =>
    produce(state, (draft) => {
      // draft.todos = action.payload.post;
    }),

    [ADD_TODO]: (state, action) =>

    produce(state, (draft) => {
      // draft.todos.content.unshift(action.payload.post_list);
    }),

    [DELETE_TODO]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.planId)
        // draft.todos.content = draft.todos.content.filter((p) =>  p.planId !== action.payload.planId);
      }),

    [EDIT_TODO]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.planId)
        // draft.todos.content = draft.todos.content.filter((p) =>  p.planId === action.payload.planId);
      }),
  },
  initialState
);

const actionCreators = {
// export 할 것들

};

export { actionCreators };