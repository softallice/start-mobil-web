<template>  
<q-layout>
    <q-page-container>
    <Family/>
    </q-page-container>
</q-layout>
</template>
<script>
import Family from 'src/pages/event/Family'
import ChildGrowth from 'src/pages/event/Family'
import Woman from 'src/pages/event/Woman'
export default {
    name: 'EventMain',
    components: {
        Family,
        ChildGrowth,
        Woman
    }
}
</script>