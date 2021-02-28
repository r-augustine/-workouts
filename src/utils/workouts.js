export const workouts = [
  {
    name: "Routine 6",
    cycle: "Four Day Split, Three Days Off",
    level: "Intermediate",
    goal: "Muscle Size",
    notes:
      "With this routine, you have three days of rest per week and four training days total. While that sounds pretty easy, if you attack the weights with intensity, you'll see dramatic changes. Stick to rep schemes between 6-10 for each set. You can easily modify this program to meet your specific needs by adding sets and different exercises. Good luck at putting togther the routine that just might make you a champion",
    days: [
      {
        description: "Monday: Chest/Bicepts",
        off: false,
        warmup: null,
        routine: [
          {
            name: "Chest",
            exercises: [
              { description: "Bench Presses: 3 Warmup Sets", url: "" },
              { description: "Bench Presses: 3 Sets", url: "" },
              { description: "Incline Dumbell Bench Presses: 3 Sets", url: "" },
              { description: "Incline Flyes: 3 Sets", url: "" },
            ],
          },
          {
            name: "Biceps",
            exercises: [
              { description: "Barbell Curls: 3 Sets", url: "" },
              { description: "Dumbbell Curls: 3 Sets", url: "" },
              { description: "Concentration Curls: 3 Sets", url: "" },
            ],
          },
        ],
      },
      {
        description: "Tuesday: Legs",
        off: false,
        warmup: "Stationary bike, 10 minutes",
        routine: [
          {
            name: "Hamstrings",
            exercises: [
              { description: "Seated Leg Curls: 3 Sets", url: "" },
              { description: "Stiff-Leg Deadlifts: 3 Sets", url: "" },
              { description: "One-Leg Leg Curls: 3 Sets", url: "" },
              { description: "Incline Flyes: 3 Sets", url: "" },
            ],
          },
          {
            name: "Quads",
            exercises: [
              { description: "Squats: 3 Sets", url: "" },
              { description: "Leg Press: 3 Sets", url: "" },
              { description: "Leg Extensions: 3 Sets", url: "" },
            ],
          },
        ],
      },
      {
        description: "Wednesday: Off",
        off: true,
        warmup: "Stationary bike, 10 minutes",
        routine: [
          {
            name: "Hamstrings",
            exercises: [
              { description: "Seated Leg Curls: 3 Sets", url: "" },
              { description: "Stiff-Leg Deadlifts: 3 Sets", url: "" },
              { description: "One-Leg Leg Curls: 3 Sets", url: "" },
              { description: "Incline Flyes: 3 Sets", url: "" },
            ],
          },
          {
            name: "Quads",
            exercises: [
              { description: "Squats: 3 Sets", url: "" },
              { description: "Leg Press: 3 Sets", url: "" },
              { description: "Leg Extensions: 3 Sets", url: "" },
            ],
          },
        ],
      },
      {
        description: "Thursday: Back",
        off: false,
        warmup: "",
        routine: [
          {
            name: "Back",
            exercises: [
              { description: "Pullups: 3 Warm-up Sets", url: "" },
              { description: "Barbell Rows: 3 Sets", url: "" },
              { description: "Seated Rows: 3 Sets", url: "" },
              { description: "One-Arm Dumbbell Row: 3 Sets", url: "" },
              { description: "Deadlifts Row: 3 Sets", url: "" },
              { description: "Barbell Shrugs: 3 Sets", url: "" },
            ],
          },
        ],
      },
      {
        description: "Friday: Off",
        off: true,
        warmup: "",
        routine: [
          {
            name: "Back",
            exercises: [
              { description: "Pullups: 3 Warm-up Sets", url: "" },
              { description: "Barbell Rows: 3 Sets", url: "" },
              { description: "Seated Rows: 3 Sets", url: "" },
              { description: "One-Arm Dumbbell Row: 3 Sets", url: "" },
              { description: "Deadlifts Row: 3 Sets", url: "" },
              { description: "Barbell Shrugs: 3 Sets", url: "" },
            ],
          },
        ],
      },
      {
        description: "Saturday: Shoulders/Triceps",
        off: false,
        warmup: "Dumbbell Press 3 Sets",
        routine: [
          {
            name: "Shoulders",
            exercises: [
              { description: "Dumbbell Press: 3 Warm-up Sets", url: "" },
              { description: "Front Barbell Press: 3 Sets", url: "" },
              { description: "Bent-Over Dumbbell Laterals: 3 Sets", url: "" },
            ],
          },
          {
            name: "Triceps",
            exercises: [
              { description: "Cable Pushdowns (V Bar)", url: "" },
              { description: "Close Grip Bench Press: 3 Sets", url: "" },
              { description: "Over-Head Dumbbell Press: 3 Sets", url: "" },
            ],
          },
        ],
      },
    ],
  },
];
