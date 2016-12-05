import { mapValues, values } from 'lodash';

export function schemaTransform(sections: any[]) {
  return sections.map((sect) => mapValues(sect, (value, key) => {
    if (key === 'programs') return values(value);
    return value;
  }));
}
