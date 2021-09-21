<template>
    <div v-if="type !== undefined">
        <el-date-picker
                v-model="date"
                value-format="yyyy-MM-dd"
                @change="(val) => $emit('input', val)"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
    </div>
    <div v-else>
        <el-input :value="value" size="mini" @input="$emit('input', $event)"></el-input>
    </div>
</template>
<script>

    export default {

        props: ['value', 'type'],

        data() {
            return {
                date: this.value
            }
        },

        methods: {
            test(picker){
                console.log(picker)
            }
        }
    };
</script>
<style scoped>

</style>