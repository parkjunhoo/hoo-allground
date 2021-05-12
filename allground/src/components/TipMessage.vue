<template>
<div style="position:absolute; top:85%; z-index:5; width:100%; opacity:.5;" id="tipmessage">
<v-container>
    <v-row class="d-flex justify-center" v-if="!this.$vuetify.breakpoint.xs">
        <v-col cols="auto">
            <v-img height="50px" width="50px" cover src="@/assets/TipMessage/mouse.png">
            </v-img>
        </v-col>
        <v-col class="d-flex align-center" cols="auto">
            <p class="tipText">마우스 스크롤로 화면을 전환하세요.</p>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center" v-if="this.$vuetify.breakpoint.xs">
        <v-col cols="auto">
            <v-img class="swip" contain height="50px" width="50px" cover src="@/assets/TipMessage/finger.png">
            </v-img>
        </v-col>
        <v-col class="d-flex align-center" cols="auto">
            <p class="tipText">화면을 스와이핑하여 전환하세요.</p>
        </v-col>
    </v-row>
</v-container>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tipText{
    color:white;
}
.tipText::selection{
    background-color: transparent;
}

.swip{
    animation: swiping 1s ease-out alternate infinite;
    transition-duration: 1s;
}
@keyframes swiping{
    0%{
        top:0%;
        opacity:0;
    }
    100%{
        top:30%;
        opacity:1;
    }
}
</style>