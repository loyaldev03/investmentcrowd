import { CommentState } from './comment.state';
import { ProjectState } from './project.state';
import { AppState } from './../../app.state';
import { createSelector } from 'reselect';

// Base Project State Function
function getProjectState(state: AppState): ProjectState {
  return state.project;
}

// Base Comment State Function
function getCommentState(state: AppState): CommentState {
  return state.comment;
}

// ******************** Individual selectors ***************************
function fetchDraftProject(state: ProjectState) {
  return state.draftProject ? state.draftProject.toJS() : {};
}

function fetchSelectedProject(state: ProjectState) {
  return state.selectedProject ? state.selectedProject.toJS() : {};
}

function fetchProjectComments(state: CommentState) {
  return state.ids.map(id => state.entities[id]);
}

// *************************** PUBLIC API's ****************************
export const getDraftProject = createSelector(getProjectState, fetchDraftProject);
export const getSelectedProject = createSelector(getProjectState, fetchSelectedProject);
export const getProjectComments = createSelector(getCommentState, fetchProjectComments);
