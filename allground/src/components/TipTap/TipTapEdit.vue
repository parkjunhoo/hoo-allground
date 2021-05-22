<template>
  <div class="editor" v-if="editor">
    <v-text-field v-model="title" background-color="green darken-1" label="제목" solo hide-details></v-text-field>
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
    <div class="grey d-flex justify-center">
      <v-btn @click="clickSubmit" width="100px" color="green">등록하기</v-btn>
      <v-btn @click="clickDelete" width="100px" color="pink">삭제</v-btn>
      <v-btn @click="clickCancel" width="100px" color="red">취소</v-btn>
    </div>
    <!-- <pre>{{localJSON}}</pre> -->
  </div>
</template>

<script>
// import { generateHTML } from '@tiptap/html'
// import { generateJSON } from '@tiptap/html'
import bus from '@/utils/bus.js'
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import MenuBar from './MenuBar.vue'
import axios from 'axios'
export default {
  components: {
    EditorContent,
    MenuBar,
  },
  props: {
    output: {
      type: Object,
    }
  },
  data() {
    return {
      editor: null,
      localHTML:null,
      localJSON:null,
      title:'',
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Highlight,
        TaskList,
        TaskItem,
        TextAlign,
        Image.configure({
          inline:true,
        }),
        CharacterCount.configure({
          limit: 90000,
        }),
      ],
        onUpdate: () => {
            this.localHTML = this.editor.getHTML();
            this.localJSON = this.editor.getJSON();
        },
    });
    this.title = this.output.title;
    this.editor.commands.setContent(this.output.contents);
  },
  watch:{
    outputId(){
      // console.log('work');
      this.title = this.output.title;
      this.editor.commands.setContent(this.output.contents);
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
        contents: this.editor.getJSON()
      })
      .then((res)=>{
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
      .then((res)=>{
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

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  max-height: 600px;
  color: #0D0D0D;
  background-color: white;
  border: 3px solid #0D0D0D;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0D0D0D;
  }

  &__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__footer {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    white-space: nowrap;
    border-top: 3px solid #0D0D0D;
    font-size: 12px;
    font-weight: 600;
    color: #0D0D0D;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
  }

  /* Some information about the status */
  &__status {
    display: flex;
    align-items: center;
    border-radius: 5px;

    &::before {
      content: ' ';
      flex: 0 0 auto;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(#0D0D0D, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &--connecting::before {
      background: #616161;
    }

    &--connected::before {
      background: #B9F18D;
    }
  }

  &__name {
    button {
      background: none;
      border: none;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      color: #0D0D0D;
      border-radius: 0.4rem;
      padding: 0.25rem 0.5rem;

      &:hover {
        color: #FFF;
        background-color: #0D0D0D;
      }
    }
  }
}
</style>

<style lang="scss">

/* Give a remote user a caret */
.collaboration-cursor__caret {
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  border-left: 1px solid #0D0D0D;
  border-right: 1px solid #0D0D0D;
  word-break: normal;
  pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  position: absolute;
  top: -1.4em;
  left: -1px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  color: #0D0D0D;
  padding: 0.1rem 0.3rem;
  border-radius: 3px 3px 3px 0;
  white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  padding:.5%;
  min-height: 400px;
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  mark {
    background-color: #FAF594;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>