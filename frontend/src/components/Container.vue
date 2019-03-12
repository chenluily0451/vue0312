<template>
    <el-container>
        <nav-menu></nav-menu>
        <el-container>
            <el-aside width="200px">
                <aside-menu></aside-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-footer>Footer</el-footer>
    </el-container>

</template>

<script>
import NavMenu from './NavMenu.vue'
import AsideMenu from './AsideMenu.vue'
export default {
    name: 'Container',
    components: {
        NavMenu,
        AsideMenu
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .el-header,.el-footer {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        background-color: #d3dce6;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-menu{
        height:60px;
        overflow: hidden;
        border:none
    }
</style>
