import { Action, DocumentChangeAction as DCA } from 'angularfire2/firestore/interfaces';
import { firestore } from 'firebase/app';

type DS = firestore.DocumentSnapshot;

import { groupBy, mapValues, values } from 'lodash';

// Raw normalizers

function normalizeDCAList(docs: DCA[]) {
  return docs.map(normalizeDCA);
}

function normalizeDCA(dca: DCA): any {
  return normalizeDS(dca.payload.doc);
}

function normalizeDS(ds: DS): any {
  return { ...ds.data(), $id: ds.id };
}

function normalizeActionDS(action: Action<DS>) {
  return normalizeDS(action.payload);
}

// Public normalizers

export const normalizeCollection = normalizeDCAList;

export const normalizeDoc = normalizeActionDS;

// Custom normalizers

export function mixDocuments(sections: DCA[], programs: DCA[]) {
  let groupedPrograms = groupBy(programs.map(normalizeDCA), p => p.section);

  return sections.map(s => {
    let doc = normalizeDCA(s);
    return { ...doc, programs: groupedPrograms[doc.$id] };
  });
}