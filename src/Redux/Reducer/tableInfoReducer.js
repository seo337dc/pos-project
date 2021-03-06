const initState = {
  tableDataList: [
    {
      tableIndex: 1,
      persons: 2,
      startTime: "14:00:00",
      food: [
        { foodName: "크림 파스타", count: 1, price: 10000 },
        { foodName: "로제 파스타", count: 1, price: 10000 },
        { foodName: "탄산 음료", count: 1, price: 1000 },
        { foodName: "마라탕", count: 1, price: 10000 },
        { foodName: "대합탕", count: 1, price: 20000 },
        { foodName: "냉동 삽겸살", count: 5, price: 20000 },
        { foodName: "계란 말이", count: 5, price: 20000 },
      ],
    },
    {
      tableIndex: 2,
      persons: 2,
      startTime: "14:00:00",
      food: [
        { foodName: "크림 파스타", count: 1, price: 10000 },
        { foodName: "로제 파스타", count: 1, price: 10000 },
        { foodName: "탄산 음료", count: 1, price: 1000 },
      ],
    },
    {
      tableIndex: 3,
      persons: 2,
      startTime: "14:00:00",
      food: [
        { foodName: "크림 파스타", count: 1, price: 10000 },
        { foodName: "로제 파스타", count: 1, price: 10000 },
        { foodName: "탄산 음료", count: 1, price: 1000 },
      ],
    },
    {
      tableIndex: 4,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 5,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 6,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 7,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 8,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 9,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 10,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 11,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 12,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 13,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 14,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
    {
      tableIndex: 15,
      persons: 0,
      startTime: "00:00:00",
      food: [],
    },
  ],

  nowTableIndex: 0,
};

export const reducerTableData = (state = initState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case "UPDATETABLE":
      const today = new Date();
      const timeData =
        ("0" + today.getHours()).slice(-2) +
        ":" +
        ("0" + today.getMinutes()).slice(-2) +
        ":" +
        ("0" + today.getSeconds()).slice(-2);

      const updateTableList = actions.tableList.map((table) => {
        if (table.tableIndex === actions.tableInfo.tableIndex) {
          return {
            ...table,
            persons: actions.member,
            food: actions.foodList,
            startTime:
              table.startTime === "00:00:00" ? timeData : table.startTime,
          };
        } else {
          return table;
        }
      });

      console.log(updateTableList);

      return (state = {
        ...state,
        tableDataList: updateTableList,
      });

    case "CHANGETABLE":
      const index = actions.table.tableIndex;
      return (state = {
        ...state,
        nowTableIndex: index - 1,
      });

    default:
      return state;
  }
};
