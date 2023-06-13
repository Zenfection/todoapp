<script setup lang="ts">
const users = ref([])

onMounted(async () => {
  users.value = await fetch('/api/users').then((res) => res.json())
})
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <br>
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>
