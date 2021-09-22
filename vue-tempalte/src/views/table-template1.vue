<template>
    <new-table :data="tableData" :columns="columns" @getRowData="saveData"></new-table>
</template>
<script>
    import NewTable from "@/components/table-components-1/newTable.vue";

    export default {
        components: {
            NewTable,
        },

        data() {
            return {
                columns: [
                    {title: "日期", dataIndex: "date", type: {name: "date"}, width: 300},
                    {title: "姓名", dataIndex: "name",},
                    {title: "地址", dataIndex: "address"},
                ],

                tableData: [{
                    uuid: '1',
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                }, {
                    uuid: '2',
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                }, {
                    uuid: '3',
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                }, {
                    uuid: '4',
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }]
            };
        },

        methods: {
            saveData(val) {
                console.log(val)
            }
        }
    };
</script>
<style scoped>

</style>