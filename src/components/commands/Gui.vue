<script setup lang="ts">
import { guiUrl } from '@/utils/constants'

const openGui = () => {
  window.open(guiUrl, '_blank')
}

openGui()
</script>
