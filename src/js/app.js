export default function displayTypesOfAttacks({ special }) {
  if (special) {
    const result = [];
    for (const attack of special) {
      const { id, name, description, icon } = attack;
      result.push({
        id,
        name,
        description: description || "Описание недоступно",
        icon,
      });
    }
    return result;
  } else {
    throw new Error("Данные не переданы");
  }
}
