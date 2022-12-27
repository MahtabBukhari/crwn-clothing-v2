import { createAction } from "../../components/createAction";

import { SET_CATEGORIES_TYPES } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (gategoriesArray) =>
  createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, gategoriesArray);

export const fetchCategoriesfailed = (error) =>
  createAction(SET_CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);












