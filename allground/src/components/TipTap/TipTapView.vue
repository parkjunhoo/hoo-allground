<template>
  <div v-html="output"></div>
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
        input: {
        type: Object,
        }
    },
    computed: {
        output() {
        return generateHTML(this.input, [
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

<style scoped>
img {
    max-width: 100%;
    height: auto;
}
</style>
