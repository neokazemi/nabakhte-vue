<template>
  <access-information-correction />
</template>

<script>
import AccessInformationCorrection from '~/components/admin/InformationCorrections/accessInfo'
export default {
  name: 'Edit',
  components: { AccessInformationCorrection },
  middleware: 'auth'
}
</script>
