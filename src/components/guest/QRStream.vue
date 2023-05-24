<template>
  <div>
    <p
      v-if="noRearCamera"
      class="error"
    >
      У вас нет или не работает фронтальная камера
    </p>

    <p
      v-if="noFrontCamera"
      class="error"
    >
      У вас нет или не работает передняя камера
    </p>
    <button
      class=""
      @click="turnCameraOff"
    >
      Отключить камеру
    </button>
    <button
      class=""
      @click="turnCameraOn"
    >
      Включить камеру
    </button>

    <!-- <router-link to="/src/assets/AutoLayoutVertical.pdf" target="_blank">
        pdf
    </router-link> -->

    <qrcode-stream
      :camera="camera"
      @init="onInit"
      @decode="onDecode"
    >
      <button
        class="change"
        @click="switchCamera"
      >
        Change
      </button>
    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue3-qrcode-reader'

export default {
  components: { QrcodeStream },

  data() {
    return {
      camera: 'auto',

      noRearCamera: false,
      noFrontCamera: false,
    }
  },

  //   mounted: () => {
  //     console.log(pdf);
  //   },

  methods: {
    switchCamera() {
      switch (this.camera) {
        case 'front':
          this.camera = 'rear'
          break
        case 'rear':
          this.camera = 'front'
          break
      }
    },

    turnCameraOff() {
      this.camera = 'off'
    },

    turnCameraOn() {
      this.camera = 'auto'
    },

    onDecode(res) {
      this.$router.push('/check-qr')
      // window.open("/check-qr", '_blank');
    },

    async onInit(promise) {
      try {
        await promise
      } catch (error) {
        const triedFrontCamera = this.camera === 'front'
        const triedRearCamera = this.camera === 'rear'

        const cameraMissingError = error.name === 'OverconstrainedError'

        if (triedRearCamera && cameraMissingError) {
          this.noRearCamera = true
        }

        if (triedFrontCamera && cameraMissingError) {
          this.noFrontCamera = true
        }

        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
.change {
  position: absolute;
  left: 10px;
  top: 10px;
}

button {
  background: #1baa75;
  padding: 11px 20px;
  color: #f6f6f6;
  margin: 15px;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
