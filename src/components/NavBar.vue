<template>
    <div> 
        <nav class="navbar navbar-dark bg-primary">
            <router-link class="navbar-brand" :to="{name: 'all-images'}">  
               All images 
            </router-link>
            <router-link class="navbar-brand" :to="{name: 'add'}">  
               Add new image 
            </router-link>
            <router-link class="navbar-brand" :to="{name: 'my-galleries'}">  
               My galleries 
            </router-link> 
        </nav>  
        
    </div>
</template>

<script>

</script>

<style>
.navbar {
    color: white !important;
}
</style>