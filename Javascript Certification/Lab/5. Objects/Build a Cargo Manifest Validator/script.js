function normalizeUnits(manifest) {
  let newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.unit = "kg";
    newManifest.weight = 0.45 * newManifest.weight;
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // containerId
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    Number.isInteger(manifest.containerId) === false ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  //weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    Number.isInteger(manifest.weight) === false ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${normalized.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }

  return errors;
}

console.log(
  validateManifest({
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false,
  }),
);

console.log(validateManifest({}));
console.log(
  validateManifest({
    destination: " ",
  }),
);
