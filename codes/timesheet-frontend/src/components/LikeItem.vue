<template>
    <li>
        {{data.name}} <br/>
        <small>({{ data.createdAt | fromNow}})</small>
    </li>
</template>

<script>
export default {
  name: 'LikeItem',
  props: ['data']
}
</script>
