export type FirestoreId = string;
export type StoragePath = string;

export interface Section {
  $id: FirestoreId;
  title: string;
  description: string;
  programs: Program[];
}

export interface Program {
  $id: FirestoreId;
  title: string;
  description: string;
  location: string;
  image: StoragePath;

  section: FirestoreId;
}

export interface Publication {
  $id: FirestoreId;
  title: string;
  description: string;
  image: StoragePath;
}