<template>
    <el-col>
        <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                router="true"
                active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item  index="hi">
                <i class="el-icon-menu"></i>
                <i class="el-icon-document"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item >
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item>
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>
<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .el-menu{
        width:200px;
        overflow: hidden;
        border:none
    }
</style>