<template>
  <div class="JoditView" v-html="output.contents"></div>
</template>

<script>
export default {
    props: {
        output: {
        type: Object,
        }
    },
    computed: {
    },
    mounted(){

    },
}
</script>


<style>
.JoditView img{
  max-width: 100% !important;
  height: auto !important;
  padding:20px;
}

.JoditView h1,h2,h3,h4,h5,h6{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:1.2rem;
}
.JoditView p{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:1rem;
}

@media (max-width:1000px){
    .JoditView h1,h2,h3,h4,h5,h6{
        font-size:1.2rem;
    }
    .JoditView p{
        font-size:.8rem;
    }
}
@media (max-width:680px){
    .JoditView h1,h2,h3,h4,h5,h6{
        font-size:1rem;
    }
    .JoditView p{
        font-size:.75rem;
    }
}
@media (max-width:520px){
    
    .JoditView h1,h2,h3,h4,h5,h6{
    font-size:1rem;
    }
    .JoditView p{
        font-size:.7rem;
    }
}

</style>

