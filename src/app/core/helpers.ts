import { DocumentChangeAction as DA } from 'angularfire2/firestore/interfaces';

import { groupBy, mapValues, values } from 'lodash';

export function mixDocuments(sections: DA[], programs: DA[]) {
  let groupedPrograms = groupBy(programs.map(normalizeDoc), p => p.section);

  return sections.map(s => {
    let doc = normalizeDoc(s);
    return { ...doc, programs: groupedPrograms[doc.$id] };
  });
}

export function normalizeDocArray(docs: DA[]) {
  return docs.map(normalizeDoc);
}

export function normalizeDoc(doc: DA): any {
  return { ...doc.payload.doc.data(), $id: doc.payload.doc.id };
}
