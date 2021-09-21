<template>
    <el-table
            :data="data"
            border
            style="width: 100%">
        <el-table-column
            v-for="item in columns"
            :prop="item.dataIndex"
            :label="item.label"
            :key="item.dataIndex">
            <template slot-scope="scope">
                <input-type
                        v-if="scope.row.editState"
                        :type="item.type"
                        :value="scope.row[item.dataIndex]"
                        @input="(val) => scope.row[item.dataIndex] = val">
                </input-type>
                <div v-else>{{scope.row[item.dataIndex]}}</div>
            </template>
        </el-table-column>
        <el-table-column
                width="1">
            <template slot-scope="scope">
                <div style="position: absolute; right: 30px; top: 10px">
                    <el-link v-if="!scope.row.editState" type="primary" icon="el-icon-edit" size="mini" @click="editData(scope.row)"></el-link>
                    <el-link v-else type="primary" icon="el-icon-check" size="mini" @click="saveData(scope.row)"></el-link>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    import InputType from "./inputType.vue"

    export default {

        props: ["data","columns"],

        components: {InputType},

        data() {
            return {

            };
        },
        methods: {
            editData(row) {
                this.$set(row, 'editState', true)
            },

            saveData(row){
                this.$set(row, 'editState', false)
                this.$emit('getRowData', row)
            },

            getValue(val,row){
                console.log(row)
                console.log(val)
                row = val
            }
        }
    };
</script>
<style scoped>

</style>