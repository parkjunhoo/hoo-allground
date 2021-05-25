<template>
    <div id="app">
      <v-text-field v-model="title" background-color="green darken-1" label="제목" solo hide-details></v-text-field>
      <jodit-editor v-model="content" />
      <div class="grey d-flex justify-center">
        <v-btn @click="clickSubmit" width="100px" color="green">등록하기</v-btn>
        <v-btn @click="clickDelete" width="100px" color="pink">삭제</v-btn>
        <v-btn @click="clickCancel" width="100px" color="red">취소</v-btn>
      </div>
    </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'
import axios from 'axios'
import bus from '@/utils/bus.js'

export default {
    name: 'JoditEdit',
    components: { JoditEditor },
    props: {
      output: {
        type: Object,
      }
    },
    data () {
        return {
            title:'',
            content: '',
        }
    },
    mounted(){
      this.title = this.output.title;
      this.content = this.output.contents;
    },
    watch:{
      outputId(){
        // console.log('work');
        this.title = this.output.title;
        this.content = this.output.contents;
      },
    },
    computed:{
      outputId(){
        return this.output.id;
      },
      outputTitle(){
        return this.output.title;
      },
      outputContents(){
        return this.output.contents;
      },
    },
    methods: {
      clickSubmit(){
        bus.$emit('start:loading');
        axios.put('api/board/edit',{
          id:this.output.id,
          title: this.title,
          contents: this.content
        })
        .then(()=>{
          // console.log(res.data);
          this.$store.dispatch('get_board_find');
          bus.$emit('end:loading');
          this.$emit('carouselMove',0);
        })
        
      },
      clickDelete(){
        axios.post('api/board/delete',{
          id:this.output.id,
        })
        .then(()=>{
          // console.log(res.data);
          this.$store.dispatch('get_board_find');
          this.$emit('carouselMove',0);
        })
      },
      clickCancel(){
        window.location.reload();
        this.$emit('carouselMove',0);
      },
    },
}
</script>