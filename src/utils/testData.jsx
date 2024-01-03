const data = {
  id: 1,
  name: "user1",
  allSchedules: [
    {
      day: "Mon Jan 01 2024",
      id: 1,
      isOpen: true,
      schedulesOfDay: [
        {
          id: "s1",
          startTime: "09:30",
          endTime: "10:30",
          subject: "Subject 1",
          body: "Body of subject 1",
        },
        {
          id: "s2",
          startTime: "10:30",
          endTime: "11:30",
          subject: "Subject 2",
          body: "Body of subject 2",
        },
        {
          id: "s3",
          startTime: "11:30",
          endTime: "12:30",
          subject: "Subject 3",
          body: "Body of subject 3",
        },
      ],
    },

    {
      day: "Tue Jan 02 2024",
      id: 2,
      schedulesOfDay: [
        {
          id: "s4",
          startTime: "09:30",
          endTime: "10:30",
          subject: "Subject 4",
          body: "Body of subject 4",
        },
        {
          id: "s5",
          startTime: "10:30",
          endTime: "11:30",
          subject: "Subject 5",
          body: "Body of subject 5",
        },
      ],
    },
  ],
}

export default data
