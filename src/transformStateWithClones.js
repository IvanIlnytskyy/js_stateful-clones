'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let currentState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(currentState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(function (key) {
        delete currentState[key];
      });
    }

    if (action.type === 'clear') {
      currentState = {};
    }

    states.push({ ...currentState });
  }

  return states;
}

module.exports = transformStateWithClones;
