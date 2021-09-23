<template>
    <div v-if="type !== undefined">
        <el-date-picker
                v-model="valueData"
                value-format="yyyy-MM-dd"
                @change="(val) => $emit('input', val)"
                type="date"
                size="mini"
                placeholder="选择日期">
        </el-date-picker>
    </div>
    <div v-else>
        <el-input :value="value" size="mini" @input="$emit('input', $event)" v-focus></el-input>
    </div>
</template>
<script>

    export default {

        props: ['value', 'type'],

        data() {
            return {
                valueData: this.value
            }
        },

        directives: {
            // 注册一个局部的自定义指令 v-focus
            focus: {
                // 指令的定义
                inserted: function (el) {
                    // 聚焦元素
                    el.querySelector('input').focus()
                }
            }
        },

        methods: {
            test(val) {
                console.log(val)
            }
        }
    };
</script>
<style scoped>

</style>