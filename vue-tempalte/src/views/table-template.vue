<template>
    <div class="handover-plan">
        <div style="margin-bottom: 30px">
            <el-row type="flex" justify="space-between" align="middle" class="handover-plan-top">
                <div>移交软件和文档列表<i class="el-icon-document" style="margin-left: 5px"></i></div>
                <el-button size="mini" icon="el-icon-download">从数据管理计划导入</el-button>
            </el-row>
            <new-table :data.sync="tableData" :columns="columns" @save="saveData" @delete="deleteData"></new-table>
        </div>

        <div style="margin-bottom: 30px">
            <el-row type="flex" justify="space-between" align="middle" class="handover-plan-top">
                <div>移交计划<i class="el-icon-document" style="margin-left: 5px"></i></div>
                <el-button size="mini" icon="el-icon-download">从进度计划导入</el-button>
            </el-row>
            <new-table :data.sync="tableData1" :columns="columns1" @save="saveData" @delete="deleteData"></new-table>
        </div>

        <div>
            <el-row type="flex" justify="space-between" align="middle" class="handover-plan-top">
                <div>其他信息<i class="el-icon-document" style="margin-left: 5px"></i></div>
                <el-button type="primary" size="mini">保存</el-button>
            </el-row>
            <el-form ref="setParamsForm">
                <el-descriptions :column="2" size="mini" border colon>
                    <el-descriptions-item >
                        <template slot="label">
                            描述：
                        </template>
                        <el-form-item style="margin-bottom: 0">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            附件：
                        </template>
                        <el-form-item style="margin-bottom: 0">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                    </el-descriptions-item>
                </el-descriptions>
            </el-form>
        </div>

    </div>
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
                        rule: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
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

                tableData: [
                    {
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
                    }
                ],

                columns1: [
                    {
                        title: "活动名称",
                        dataIndex: "name",
                        editState: true,
                        params: {
                            name: "input",
                            placeholder: "请输入名称",
                            maxlength: 10,
                        },
                        rule: [
                            { required: true, message: '请输入活动名称', trigger: 'blur' },
                            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                        width: 300
                    },{
                        title: "计划完成时间",
                        dataIndex: "jhwcsj",
                        editState: true,
                        params: {
                            name: "date",
                            placeholder: "请选择计划完成时间",
                        },
                        rule: [
                            { required: true, message: '请选择计划完成时间', trigger: 'blur' },
                        ],
                    },{
                        title: "负责人",
                        dataIndex: "fzr",
                        editState: true,
                        params: {
                            name: "input",
                            placeholder: "请选择负责人",
                            maxlength: 10,
                        },
                        rule: [
                            { required: true, message: '请选择负责人', trigger: 'blur' },
                        ],
                    },{
                        title: "备注",
                        dataIndex: "bz",
                        editState: true,
                        params: {
                            name: "input",
                            type: "textarea",
                            placeholder: "请填写备注",
                        },rule: [
                            { max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                        ],
                    }
                ],

                tableData1: [
                    {
                        uuid: '1',
                        name: "王小虎",
                        jhwcsj: "2016-05-02",
                        fzr: "2016-05-02",
                        bz: "上海市普陀区金沙江路 1518 弄"
                    }, {
                        uuid: '2',
                        name: "王小虎",
                        jhwcsj: "2016-05-04",
                        fzr: "2016-05-02",
                        bz: "上海市普陀区金沙江路 1517 弄"
                    }, {
                        uuid: '3',
                        name: "王小虎",
                        jhwcsj: "2016-05-01",
                        fzr: "2016-05-02",
                        bz: "上海市普陀区金沙江路 1519 弄"
                    }, {
                        uuid: '4',
                        name: "王小虎",
                        jhwcsj: "2016-05-03",
                        fzr: "2016-05-02",
                        bz: "上海市普陀区金沙江路 1516 弄"
                    }
                ],

            };
        },

        methods: {
            saveData(val) {
                console.log(val)
            },

            deleteData(val) {
                console.log(val)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .handover-plan-top {
        padding: 10px 10px;
        background-color: #f5f7fa;
    }

    /*.handover-plan >>> .el-form-item{*/
    /*    margin-bottom: 0 !important;*/
    /*}*/
    .el-form-item--small.el-form-item{
        margin: 0;
    }

    .handover-plan >>> .el-descriptions-item__label.is-bordered-label {
        background: #f5f7fa;
    }
</style>