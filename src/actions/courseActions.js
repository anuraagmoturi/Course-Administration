import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS,courses} ;//course:course
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS,course} ;//course:course
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS,course} ;//course:course
}




//load course thunk
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw (error);
    });
  };
}

//save course thunk
export function saveCourse(course) {
  return function (dispatch,getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)):
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error=>{
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

