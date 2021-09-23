<template>
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
                <input-type
                        v-if="scope.row.editState && item.editState"
                        :params="item.params"
                        :value="scope.row[item.dataIndex]"
                        @input="(val) => scope.row[item.dataIndex] = val">
                </input-type>
                <div v-else>{{scope.row[item.dataIndex]}}</div>
            </template>
        </el-table-column>
        <el-table-column width="80" class-name="scope-edit">
            <template slot="header">
                <el-row type="flex" justify="center">
                    <el-link
                            type="primary"
                            icon="el-icon-circle-plus-outline"
                            @click="addData">
                    </el-link>
                </el-row>
            </template>
            <template slot-scope="scope">
                <el-row type="flex" justify="center">
                    <el-link
                            v-if="!scope.row.editState"
                            type="primary"
                            icon="el-icon-edit"
                            @click="editData(scope.row)">
                    </el-link>
                    <el-link
                            v-if="scope.row.editState"
                            type="primary"
                            icon="el-icon-check"
                            @click="saveData(scope.row)">
                    </el-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-link
                            v-if="!scope.row.editState"
                            type="primary"
                            icon="el-icon-delete"
                            @click="deleteData(scope.row)">
                    </el-link>
                    <el-link
                            v-if="scope.row.editState"
                            type="primary"
                            icon="el-icon-close"
                            @click="revokeData(scope.row)">
                    </el-link>
                </el-row>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    import InputType from "./inputType.vue"

    export default {

        props: {
            data: {
                type: Array,
            },
            columns: {
                type: Array,
            }
        },

        components: {InputType},

        data() {
            return {
                // 做数据缓存
                oldData: JSON.parse(JSON.stringify(this.data))
            };
        },
        methods: {
            // 添加数据
            addData() {
                const copyData = [...this.data,{editState: true}];
                console.log(copyData);
                this.$emit('update:data', copyData);
            },

            // 编辑数据
            editData(row) {
                this.$set(row, 'editState', true)
            },

            // 保存数据
            saveData(row) {
                this.oldData.forEach((item,index,arr) => {
                    if(item.uuid === row.uuid) arr[index] = {...row}
                });
                this.$set(row, 'editState', false);
                this.$emit('getRowData', row)
            },

            // 撤销编辑
            revokeData(row) {
                this.oldData.filter((item) => {
                    if (item.uuid === row.uuid) {
                        for (let keyName in item) {
                            this.$set(row, keyName, item[keyName]);
                        }
                    }
                });
                this.$set(row, 'editState', false);
            },

            // 删除数据
            deleteData(row){
                this.data.splice(this.data.findIndex((item) => item.uuid === row.uuid),1);
                this.oldData.splice(this.oldData.findIndex((item) => item.uuid === row.uuid),1);
            }
        }
    };
</script>
<style scoped>

</style>