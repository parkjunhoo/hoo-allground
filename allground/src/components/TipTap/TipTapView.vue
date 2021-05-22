<template>
  <div class="TipTapView" v-html="viewContents"></div>
</template>

<script>
// Option 1: Browser + server-side
import { generateHTML } from '@tiptap/html'
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
export default {
    props: {
        output: {
        type: Object,
        }
    },
    computed: {
        viewContents() {
        return generateHTML(this.output.contents, [
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
            ])
        },
    },
    mounted(){

    },
}
</script>


<style>
.TipTapView img{
  max-width: 100% !important;
  height: auto !important;
  padding:20px;
}

.TipTapView h1,h2,h3,h4,h5,h6{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:1.2rem;
}
.TipTapView p{
    font-family: 'Noto Sans KR', sans-serif;
    font-size:1rem;
}

@media (max-width:1000px){
    .TipTapView h1,h2,h3,h4,h5,h6{
        font-size:1.2rem;
    }
    .TipTapView p{
        font-size:.8rem;
    }
}
@media (max-width:680px){
    .TipTapView h1,h2,h3,h4,h5,h6{
        font-size:1rem;
    }
    .TipTapView p{
        font-size:.75rem;
    }
}
@media (max-width:520px){
    
    .TipTapView h1,h2,h3,h4,h5,h6{
    font-size:1rem;
    }
    .TipTapView p{
        font-size:.7rem;
    }
}

</style>

