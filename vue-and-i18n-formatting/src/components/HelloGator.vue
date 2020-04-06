<template>
  <div>
    {{ $t('message.hello', { name: 'Gator' }) }}
    <br />
    {{ $t('message.counting', ['🐊', '🤖', '👽']) }}
    <br />
    {{ $t('message.welcome') }}
    <br />
    {{ $t('message.description') }}
  </div>
</template>

<script>
export default { name: 'Gator' }
</script>
