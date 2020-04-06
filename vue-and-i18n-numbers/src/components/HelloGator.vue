<template>
  <div>
    {{ $t('message.hello', { name: 'Gator' }) }}
    <br />
    {{ $t('message.money', { amount: $n(5, 'currency') }) }}
    <br />
    {{
      $t('message.today', {
        today: $d(new Date(), 'short'),
        longToday: $d(new Date(), 'long')
      })
    }}
  </div>
</template>

<script>
export default { name: 'Gator' }
</script>
