export function findObjectInArrayByFieldValue(arr, fieldName, fieldValue) {
  return arr.find((elem) => elem[fieldName] === fieldValue);
}

export const getFieldValueByFieldId = (fields, fieldId) =>
  fields.find((f) => f.id === fieldId)?.value;
