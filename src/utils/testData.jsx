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
          startTime: new Date("2024-01-01T10:30:00+07:00"),
          endTime: new Date("2024-01-01T11:30:00+07:00"),
          subject: "Subject 1",
          body: "Body of subject 1",
        },
        {
          id: "s2",
          startTime: new Date("2024-01-01T00:00:00+07:00"),
          endTime: new Date("2024-01-01T06:00:00+07:00"),
          subject: "Subject 2",
          body: "Body of subject 2",
        },
        {
          id: "s3",
          startTime: new Date("2024-01-01T21:00:00+07:00"),
          endTime: new Date("2024-01-01T22:00:00+07:00"),
          subject: "Subject 3",
          body: "Body of subject 3",
        },
      ],
    },

    {
      day: "Tue Jan 02 2024",
      id: 2,
      isOpen: false,
      schedulesOfDay: [
        {
          id: "s1",
          startTime: new Date("2024-01-02T10:30:00+07:00"),
          endTime: new Date("2024-01-02T11:30:00+07:00"),
          subject: "Subject 1",
          body: "Body of subject 1",
        },
        {
          id: "s2",
          startTime: new Date("2024-01-02T00:00:00+07:00"),
          endTime: new Date("2024-01-02T06:00:00+07:00"),
          subject: "Subject 2",
          body: "Body of subject 2",
        },
      ],
    },

    {
      day: "Wed Jan 03 2024",
      id: 3,
      isOpen: false,
      schedulesOfDay: [],
    },
  ],
}

export default data
