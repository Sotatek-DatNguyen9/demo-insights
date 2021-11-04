import { createSelector } from 'reselect';
import { StateType } from '../../index';

/**
 * @summary  Check state
 *
 * Get current state.
 *
 * PROPS
 * =============================================================================
 * @prop {Map<string, *>} state - current app state
 *
 */
const checkState = (state: StateType) => state;

/**
 * @summary Get specific state for this module
 *
 * Get defaultSettings state.
 *
 */
const selectBase = createSelector(checkState, (state) => state.settings);

/**
 * @summary  locale
 */
export const getLocale = createSelector(selectBase, (state) => state.locale);

/**
 * @summary  country
 */
export const getCountry = createSelector(selectBase, (state) => state.country);

/**
 * @summary loading
 */
export const loading = createSelector(selectBase, (state) => state.loading);

/**
 * @summary procedureId
 */
export const getProcedureId = createSelector(selectBase, (state) => state.procedureId);

/**
 * @summary notify
 */
export const getNotify = createSelector(selectBase, (state) => state.notify);

/**
 * @summary requestError
 */
export const getIsError = createSelector(selectBase, (state) => state.isError);

/**
 * @summary requestErrorCode
 */
export const getErrorCode = createSelector(selectBase, (state) => state?.errorCode);

export const getRiskScore = createSelector(selectBase, (state) => state.riskScore);