<template>
    <new-table :data.sync="tableData" :columns="columns" @getRowData="saveData"></new-table>
</template>
<script>
    import NewTable from "@/components/table-components/newTable.vue";

    export default {
        components: {
            NewTable,
        },

        data() {
            return {
                columns: [
                    {
                        title: "名称",
                        dataIndex: "name",
                        editState: true,
                        params: {
                            name: "input",
                            placeholder: "请输入名称",
                            maxlength: 10,
                        },
                        width: 300
                    },{
                        title: "标识号",
                        dataIndex: "bsh",
                        editState: true,
                        params: {
                            name: "input",
                            placeholder: "请输入标识号",
                            maxlength: 10,
                        },
                    },{
                        title: "版本号",
                        dataIndex: "bbh",
                        editState: true,
                        params: {
                            name: "input",
                            placeholder: "请输入版本号",
                            maxlength: 10,
                        },
                    },{
                        title: "备注",
                        dataIndex: "bz",
                        editState: true,
                        params: {
                            name: "input",
                            type: "textarea",
                            placeholder: "请填写备注",
                            maxlength: 10,
                        },
                    }
                ],

                tableData: [{
                    uuid: '1',
                    name: "王小虎",
                    bsh: "2016-05-02",
                    bbh: "2016-05-02",
                    bz: "上海市普陀区金沙江路 1518 弄"
                }, {
                    uuid: '2',
                    name: "王小虎",
                    bsh: "2016-05-04",
                    bbh: "2016-05-02",
                    bz: "上海市普陀区金沙江路 1517 弄"
                }, {
                    uuid: '3',
                    name: "王小虎",
                    bsh: "2016-05-01",
                    bbh: "2016-05-02",
                    bz: "上海市普陀区金沙江路 1519 弄"
                }, {
                    uuid: '4',
                    name: "王小虎",
                    bsh: "2016-05-03",
                    bbh: "2016-05-02",
                    bz: "上海市普陀区金沙江路 1516 弄"
                }]
            };
        },

        methods: {
            saveData(val) {
                console.log(val)
                console.log(this.tableData)
            }
        }
    };
</script>
<style scoped>

</style>