export const UPDATETABLE = "UPDATETABLE";
export const CHANGETABLE = "CHANGETABLE";

// 액션 객체 반환 함수
export const updateTable = (
  tableInfo,
  tableListData,
  foodListData,
  memberCount
) => {
  return {
    type: UPDATETABLE,
    tableList: tableListData,
    foodList: foodListData,
    member: memberCount,
    tableInfo: tableInfo,
  };
};

export const changeTable = (tableData) => {
  return { type: CHANGETABLE, table: tableData };
};
