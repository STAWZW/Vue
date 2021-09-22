<template>
    <el-menu
            :default-active="activeMenuIndex"
            @select="handleSelect"
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            style="height: 100%"
            active-text-color="#ffd04b">
        <template v-for="menu in menus">
            <el-menu-item v-if="!menu.children || menu.children.length === 0" :key="menu.id" :index="menu.alias">
                {{menu.name }}
            </el-menu-item>
            <el-submenu v-else :key="menu.id" :index="menu.alias">
                <template slot="title">{{ menu.name }}</template>
                <template v-if="menu.children && menu.children.length > 0">
                    <template v-for="item in menu.children" >
                        <el-menu-item  v-if="!item.children || item.children.length === 0" :key="item.id" :index="item.alias">{{ item.name }}</el-menu-item>
                        <el-submenu v-else :key="item.id" :index="item.alias">
                            <template slot="title">{{ item.name }}</template>
                            <template v-if="item.children && item.children.length > 0">
                                <template v-for="sunitem in item.children" >
                                    <el-menu-item :key="sunitem.id" :index="sunitem.alias">{{ sunitem.name }}</el-menu-item>
                                </template>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                activeMenuIndex: "TableTemplate",
                menus: [
                    {
                        id: "TableTemplate",
                        name: "可编辑表",
                        alias: "TableTemplate"
                    },{
                        id: "TableTemplate1",
                        name: "可编辑表1",
                        alias: "TableTemplate1"
                    }
                ]
            };
        },
        methods: {
            top_menu_click({key}) {
                this.$router.push({name: `${key}`});
            },
            handleSelect(key) {
                this.$router.push({name: `${key}`});
            },

        },
    };
</script>
