<template>
    <el-table
            :data="data"
            border
            style="width: 100%">
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
                        :type="item.type"
                        :value="scope.row[item.dataIndex]"
                        @input="(val) => scope.row[item.dataIndex] = val">
                </input-type>
                <div v-else>{{scope.row[item.dataIndex]}}</div>
            </template>
        </el-table-column>
        <el-table-column width="80" class-name="scope-edit">
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
                    <el-divider v-if="scope.row.editState" direction="vertical"></el-divider>
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

        props: ["data", "columns"],

        components: {InputType},

        data() {
            return {
                oldData: JSON.parse(JSON.stringify(this.data))
            };
        },
        methods: {
            // 编辑数据
            editData(row) {
                this.$set(row, 'editState', true)
            },

            // 保存数据
            saveData(row) {
                this.oldData.forEach((item,index,arr) => {
                    if(item.uuid === row.uuid){
                        arr[index] = {...row} ;
                    }
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
        }
    };
</script>
<style scoped>

</style>