<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-table
                :data="data"
                border
                style="width: 100%">
            <el-table-column
                    label="序号"
                    type="index"
                    width="50"
                    header-align="center"
                    align="center">
            </el-table-column>
            <el-table-column
                    v-for="item in columns"
                    :prop="item.dataIndex"
                    :label="item.title"
                    :key="item.dataIndex"
                    :width="item.width"
                    :header-align="item.headerAlign || 'center'"
                    :align="item.align || 'center'">
                <template slot-scope="scope">
                    <el-form-item v-if="scope.row.editState && item.editState" :prop="item.dataIndex">
                        <input-type
                                :params="item.params"
                                :value="scope.row[item.dataIndex]"
                                @input="(val) => scope.row[item.dataIndex] = val">
                        </input-type>
                    </el-form-item>
                    <div v-else>{{scope.row[item.dataIndex]}}</div>
                </template>
            </el-table-column>
            <el-table-column width="80" class-name="scope-edit">
                <template slot="header">
                    <el-row type="flex" justify="center">
                        <el-tooltip content="添加" :enterable="false" placement="top">
                            <el-link
                                    type="primary"
                                    icon="el-icon-circle-plus-outline"
                                    @click="addData">
                            </el-link>
                        </el-tooltip>
                    </el-row>
                </template>
                <template slot-scope="scope">
                    <el-row type="flex" justify="center">
                        <el-tooltip content="编辑" :enterable="false" placement="top" v-if="!scope.row.editState">
                            <el-link
                                    type="primary"
                                    icon="el-icon-edit"
                                    @click="editData(scope.row)">
                            </el-link>
                        </el-tooltip>
                        <el-tooltip content="保存" :enterable="false" placement="top" v-if="scope.row.editState">
                            <el-link
                                    v-if="scope.row.editState"
                                    type="primary"
                                    icon="el-icon-check"
                                    @click="saveData(scope)">
                            </el-link>
                        </el-tooltip>
                        <el-divider direction="vertical"></el-divider>
                        <el-tooltip content="删除" :enterable="false" placement="top" v-if="!scope.row.editState">
                            <el-popconfirm title="是否要删除这条数据？" @confirm="deleteData(scope)">
                                <el-link
                                        slot="reference"
                                        type="primary"
                                        :underline=false
                                        icon="el-icon-delete">
                                </el-link>
                            </el-popconfirm>
                        </el-tooltip>
                        <el-tooltip content="取消" :enterable="false" placement="top" v-if="scope.row.editState">
                            <el-link
                                    type="primary"
                                    icon="el-icon-close"
                                    @click="revokeData(scope)">
                            </el-link>
                        </el-tooltip>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
    </el-form>
</template>
<script>
    import InputType from "./inputType.vue"

    export default {

        props: {
            // 表数据
            data: {
                type: Array,
            },

            // 表定义参数
            columns: {
                type: Array,
            }
        },

        components: {InputType},

        data() {
            // 生成表单对象
            let ruleFormData = {};
            this.columns.forEach(item => { ruleFormData[item.dataIndex] = undefined});

            // 生成表单验证规则
            let rulesData = {};
            this.columns.forEach(item => { rulesData[item.dataIndex] = item.rule});

            return {
                // 做表数据缓存
                oldData: JSON.parse(JSON.stringify(this.data)),

                // 表单验证对象
                ruleForm: {...ruleFormData},

                // 表单验证规则
                rules: {...rulesData},
            };
        },
        methods: {
            // 添加数据
            addData() {
                let rowNew = {editState: true};
                this.columns.forEach(item => { rowNew[item.dataIndex] = undefined});
                const copyData = [...this.data,rowNew];
                this.$emit('update:data', copyData);
            },

            // 编辑数据
            editData(row) {
                this.$set(row, 'editState', true)
            },

            // 保存数据
            saveData(scope) {
                this.ruleForm = Object.assign(this.ruleForm, scope.row);
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.oldData[scope.$index] = {...scope.row};
                        this.$set(scope.row, 'editState', false);
                        this.$emit('save', scope.row)
                    }
                });
            },

            // 撤销编辑
            revokeData(scope) {
                for (let keyName in this.oldData[scope.$index]) {
                    this.$set(scope.row, keyName, this.oldData[scope.$index][keyName]);
                }
                this.$set(scope.row, 'editState', false);
            },

            // 删除数据
            deleteData(scope){
                this.data.splice(scope.$index,1);
                this.oldData.splice(scope.$index,1);
                this.$emit('delete', scope.row)
            }
        }
    };
</script>
<style scoped>

</style>