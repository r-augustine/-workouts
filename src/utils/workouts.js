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
      {
        description: "Sunday: Off",
        off: true,
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
  {
    name: "Routine 8",
    cycle: "Five Day Split, Two Days Off",
    level: "Advanced",
    goal: "Overall Physique",
    notes: "",
    days: [
      {
        description: "Sunday: Legs/Cardio",
        off: false,
        warmup: null,
        routine: [
          {
            name: "Legs",
            exercises: [
              { description: "Leg Extensions: 3 Sets x 12 Reps", url: "" },
              { description: "Squats (Wide Leg): 5 Sets 8-12 Reps", url: "" },
              { description: "Hack Squats: 4 Sets 12-15 Reps", url: "" },
              { description: "Lunges: 4 Sets", url: "" },
              { description: "Leg Curls: 5 Sets 12 Reps", url: "" },
            ],
          },
          {
            name: "Cardio",
            exercises: [{ description: "Stairstepper: 10 mins", url: "" }],
          },
        ],
      },
      {
        description: "Monday: Off",
        off: true,
        warmup: "Stationary bike, 10 minutes",
        routine: [],
      },
      {
        description: "Tuesday: Chest/Biceps/Calves/Cardio",
        off: false,
        warmup: "",
        routine: [
          {
            name: "Chest",
            exercises: [
              {
                description: "Incline Barbell Press: 5 sets x 8-12 reps",
                url: "",
              },
              { description: "Flat Bench Flyes: 3 sets x 12 reps", url: "" },
              { description: "Cable Crossovers: 3 sets x 15 reps", url: "" },
              { description: "Dumbell Pullovers: 2 Sets x 10 reps", url: "" },
            ],
          },
          {
            name: "Biceps",
            exercises: [
              { description: "Barbell Curls: 4 Sets x 8-5 reps", url: "" },
              {
                description: "Rope Cable Hammer Curls: 4 sets x 15 reps",
                url: "",
              },
            ],
          },
          {
            name: "Calves",
            exercises: [
              { description: "Pick an exercise: 5 sets x 20 reps", url: "" },
            ],
          },
          {
            name: "Cardio",
            exercises: [{ description: "Stationary Bike: 30 mins", url: "" }],
          },
        ],
      },
      {
        description: "Wednesday: Back/Abs",
        off: false,
        warmup: "",
        routine: [
          {
            name: "Back",
            exercises: [
              { description: "Bent-Over Rows: 5 Sets 8-12 reps", url: "" },
              {
                description: "T-Bar Rows (Underhand grip): 3 sets x 10 reps",
                url: "",
              },
              { description: "Cable Rows: 3 sets x 10 reps", url: "" },
              { description: "One-Arm Dumbbell Row: 3 Sets", url: "" },
              { description: "Chin-ups: 5 Sets 12-15 reps", url: "" },
              { description: "Hyper Extensions: 3 sets x 20 reps", url: "" },
            ],
          },
          {
            name: "Abs",
            exercises: [
              { description: "Pick an exercise: 4 sets 20 reps", url: "" },
            ],
          },
        ],
      },
      {
        description: "Thursday: Off",
        off: true,
        warmup: "",
        routine: [
          {
            name: "",
            exercises: [],
          },
        ],
      },
      {
        description: "Friday: Shoulders/Triceps/Calves/Cardio",
        off: false,
        warmup: "Dumbbell Press 3 Sets",
        routine: [
          {
            name: "Shoulders",
            exercises: [
              {
                description: "Standing Shoulder Press: 4 sets 6-12 reps",
                url: "",
              },
              {
                description: "One-Arm Shoulder Press: 3 sets x 12 reps",
                url: "",
              },
              { description: "Upright Rows: 3 sets x 12 reps", url: "" },
              { description: "Rear Delt Flyes: 3 sets x 15 reps", url: "" },
              {
                description: "Standing Laterals Raises: 2 sets x 15 reps",
                url: "",
              },
            ],
          },
          {
            name: "Triceps",
            exercises: [
              { description: "Triceps Pushdowns: 4 sets x 15 reps", url: "" },
              { description: "Skullcrushres: 4 sets x 6-12 reps", url: "" },
            ],
          },
          {
            name: "Calves",
            exercises: [
              { description: "Pick an exercise: 4 sets x 15 reps", url: "" },
            ],
          },
          {
            name: "Cardio",
            exercises: [
              {
                description: "Treadmill: 25 mins varying the incline and speed",
                url: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
