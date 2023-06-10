import { List, Map } from 'immutable';

/* Concatenate page1 and page2 */
function concatElements(page1, page2) {
  const concatPage = (List(page1).concat(List(page2)));
  return concatPage;
}

/* Merge page1 and page2 but return content of page2 */
function mergeElements(page1, page2) {
  const mergePage = (Map(page1).merge(Map(page2)));
  return mergePage;
}

export { concatElements, mergeElements };
