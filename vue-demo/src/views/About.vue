<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BreadList/>
  </div>
</template>

<script>
    import BreadList from '@/components/BreadList';
    export default {
        name: "about",
        components: {
            BreadList
        }
    }
</script>
