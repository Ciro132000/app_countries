<template>
  <div class="loading">
    <div class="loadingio-spinner-pulse-fnffwr0epdh"><div class="ldio-go1chklqe8p">
        <div></div><div></div><div></div>
    </div></div>
  </div>

</template>

<script>
export default {
    name: 'Loadign'
}
</script>

<style scoped>

.loading{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

@keyframes ldio-go1chklqe8p-1 {
  0% { top: 36px; height: 128px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-go1chklqe8p-2 {
  0% { top: 41.99999999999999px; height: 116.00000000000001px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}
@keyframes ldio-go1chklqe8p-3 {
  0% { top: 48px; height: 104px }
  50% { top: 60px; height: 80px }
  100% { top: 60px; height: 80px }
}


.ldio-go1chklqe8p div { position: absolute; width: 30px }.ldio-go1chklqe8p div:nth-child(1) {
  left: 35px;
  background: #292664;
  animation: ldio-go1chklqe8p-1 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.2s
}


.ldio-go1chklqe8p div:nth-child(2) {
  left: 85px;
  background: #667395;
  animation: ldio-go1chklqe8p-2 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: -0.1s
}


.ldio-go1chklqe8p div:nth-child(3) {
  left: 135px;
  background: #94a9ce;
  animation: ldio-go1chklqe8p-3 1s cubic-bezier(0,0.5,0.5,1) infinite;
  animation-delay: undefineds
}

.loadingio-spinner-pulse-fnffwr0epdh {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}


.ldio-go1chklqe8p {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
}
.ldio-go1chklqe8p div { box-sizing: content-box; }

</style>
