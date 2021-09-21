<template>
  <new-table :data="tableData" :columns="columns" @getRowData="test"></new-table>
</template>
<script>
import NewTable from "@/components/newTable.vue";
export default {
  components: {
    NewTable,
  },

  data() {
    return {
      columns: [
        {label: "日期", dataIndex: "date", type: {name: 'date', value: ''}},
        {label: "姓名", dataIndex: "name"},
        {label: "地址", dataIndex: "address"},
      ],

      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },

  methods: {
    test(val){
      console.log(val)
    }
  }
};
</script>
<style scoped>

</style>