<template>
    <transition name="fade">
        <div 
            v-show="show" 
            tabindex="-1"
            :style="style" 
            :class="[mask, className]" 
            @keyup.esc="onEsc">
            <div class="mask" v-if="mask" @click="$emit('hide')" />
            <transition :name="animation">
                <div class="dialog" v-show="show" :style="dialogStyle">
                    <span class="close" v-if="closeButton" @click="$emit('hide')" />
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script src="./MyModal.js">
</script>

<style lang="css" src="./style/common.css">
</style>
