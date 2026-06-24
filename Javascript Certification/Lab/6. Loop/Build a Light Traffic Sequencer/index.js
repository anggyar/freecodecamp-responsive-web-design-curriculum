const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  for (let i = 0; i < cycles; i++) {
    if (config.fault === true) {
      console.log("Faulted phase!");
      return;
    } else if (config.phases.length === 0) {
      console.log("No phases found");
      return;
    }

    for (let j = 0; j < config.phases.length; j++) {
      if (config.phases[j].duration <= 0) {
        console.log("Invalid phase detected");
        continue;
      }
      console.log(
        `Switching to ${config.phases[j].color} for ${config.phases[j].duration} s`,
      );
    }
  }
}

function generateTimeline(config, cycles) {
  let elapsedTime = [];
  let timeAdded = 0;
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      timeAdded += config.phases[j].duration;
      elapsedTime.push(timeAdded);
    }
  }

  return elapsedTime;
}
