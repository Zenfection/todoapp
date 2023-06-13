<script setup lang="ts">
import { Users } from '~/utils/types'
import { UserService } from '~/services'

const users = ref<Users[]>(await UserService.getUsers())
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id.toString">
        {{ user.name }}
        <br />
        {{ user.email }}
      </li>
    </ul>
  </div>
</template>
