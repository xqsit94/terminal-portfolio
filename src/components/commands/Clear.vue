<script setup lang="ts">
import { useTerminalStore } from '@/stores/TerminalStore'

const { clearCmdHistory } = useTerminalStore()

clearCmdHistory()
</script>
