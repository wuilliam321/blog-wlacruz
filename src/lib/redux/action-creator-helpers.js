import camelCase from 'lodash/camelCase';
import {bindActionCreators} from 'redux';

export const BASE = '@@_application_base'; /* you can change this if you want */
const BASE_REG = new RegExp(`^${BASE}`);

const START = 'START';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CLEAN = 'CLEAN';
const SINGLE = 'SINGLE';

const action = actionName =>
  BASE_REG.test(actionName) ? actionName : `${BASE}/${actionName}`;

export function createAction(actionName, payload = {}) {
  const type = action(actionName);
  return {type, payload};
}

/**
 * Generate grouped actions for a single base,
 * useful for request that need a set of action creators *
 * @param base
 * @param types
 */
export function createGroupedTypes(
  base,
  types = [START, SUCCESS, FAILURE, CLEAN]
) {
  return types.reduce((acc, type) => {
    acc[type] = action(`${base}_${type}`);
    return acc;
  }, {});
}

/**
 * Generate a single action, default prefix is ${SINGLE}
 * @param base
 * @param suffix
 * @return {*}
 */
export function createSingleType(base, suffix = SINGLE) {
  return action(`${base}_${suffix}`);
}

/**
 * Generate action creator for grouped actions
 * use paird with a grouped action creators
 * @param types
 * @return {{}}
 */
export function createGroupedActionCreators(types) {
  return Object.keys(types).reduce((acc, type) => {
    acc[camelCase(type)] = payload => createAction(types[type], payload);
    return acc;
  }, {});
}

/**
 *
 * @param type
 * @return {function(*=): {type, payload}}
 */
export function createSingleActionCreator(type) {
  return payload => createAction(type, payload);
}

export function combine(...actions) {
  return dispatch => {
    return actions.reduce(
      (acc, action) => Object.assign({}, acc, action(dispatch)),
      {}
    );
  };
}

export function bindActionsRequest(actionRequest, dispatch) {
  return Object.keys(actionRequest).reduce((acc, action) => {
    acc[camelCase(action)] = bindActionCreators(
      actionRequest[action],
      dispatch
    );
    return acc;
  }, {});
}
