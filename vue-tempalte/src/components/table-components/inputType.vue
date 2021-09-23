<template>
    <div v-if="params === undefined || params.name === undefined">
        <el-input
                :value="value"
                size="mini"
                placeholder="请输入信息"
                @input="$emit('input', $event)">
        </el-input>

    </div>
    <div v-else>
        <el-date-picker
                v-if="params.name === 'date'"
                v-model="valueData"
                value-format="yyyy-MM-dd"
                @change="(val) => $emit('input', val)"
                type="date"
                size="mini"
                :placeholder="params.placeholder ? params.placeholder : '请请选择日期'">
        </el-date-picker>
        <el-input
                :type="params.type"
                v-if="params.name === 'input'"
                :value="value"
                size="mini"
                clearable
                show-word-limit
                :maxlength="params.maxlength"
                :minlength="params.minlength"
                :placeholder="params.placeholder ? params.placeholder : '请输入信息'"
                @input="$emit('input', $event)">
        </el-input>
    </div>
</template>
<script>

    export default {

        props: {
            value: {
                type: String,
            },
            params: {
                type: Object,
            }
        },

        data() {
            return {
                valueData: this.value
            }
        },

        methods: {

        }
    };
</script>
<style scoped>

</style>