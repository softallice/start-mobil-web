<template>
    <q-card class="text-white">
        <q-bar>
        
        <q-btn flat icon="keyboard_arrow_left" @click=$router.go(-1)>
            <q-tooltip content-class="text-primary">Close</q-tooltip>
        </q-btn>
        <q-space />
        </q-bar>   
        <q-card-section class="q-pt-none">
            <q-markdown :src= markdown />
        </q-card-section>
        <q-bar>
        <q-space />
        <q-btn dense flat class="full-width" label="닫기" v-close-popup @click=$router.go(-1)>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
        </q-bar>
    </q-card>        
</template>
<script>
import markdown from "src/markdown/adevent/01.우리가족.md"
export default {
    name: "Consent",
    data () {
        return {
            markdown: markdown
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    mounted ()  {
        //   consol.log(this.props.data)
    }
}
</script>
