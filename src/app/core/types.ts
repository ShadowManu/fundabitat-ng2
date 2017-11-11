type FirestoreId = string;
type StoragePath = string;

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
