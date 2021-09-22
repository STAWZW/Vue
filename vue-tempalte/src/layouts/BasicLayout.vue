<template>
    <el-container>
        <el-aside width="200px" :style="{ minHeight: 'calc(100vh - 137px)', }">
            <Menu></Menu>
        </el-aside>
        <el-main>
            <div :style="{ padding: '8px 16px', background: '#fff', minHeight: 'calc(100vh - 137px)', }">
                <router-view></router-view>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    import Menu from './Menu.vue'

    export default {
        components: {Menu},
        data() {
            return {
                collapsed: false,
            };
        },
        methods: {
            onSearch() {
            },
        },
    };
</script>

<style scoped>
    #basic_layout .logo {
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }

    #basic_layout .trigger {
        font-size: 18px;
        line-height: 55px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #basic_layout .ant-breadcrumb {
        line-height: 48px;
    }

    #basic_layout .trigger:hover {
        color: #1890ff;
    }
</style>