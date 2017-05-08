<template>
    <img :src="url" class="img-resp" :alt="title">
</template>
<script>
export default {
  name: 'ImgResp',
  props: ['url', 'title']
}
</script>
<style>
    .img-resp {
        width: 100%;
        display: block;
    }
</style>