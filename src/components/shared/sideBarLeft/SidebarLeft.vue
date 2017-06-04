<template>
    <div id="mySidenav" class="sidenav" :style="{width: size + 'px'}">
        <a class="closebtn" @click="closeNav()">&times;</a>
        <h3>{{ title }}</h3>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script src="./SidebarLeft.js">
</script>

<style src="./SidebarLeft.scss" lang="scss">
</style>
