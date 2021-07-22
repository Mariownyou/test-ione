<template>
  <div class="mt-5 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-14">
    <nav class="">
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Тестовое задание в</span>
          <span class="block text-indigo-600 xl:inline">I-ONE</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          NuxtJS приложение. Cписок задач всех пользователей, с возможностью зайти в каждую задачу и посмотреть информацию о ней.
        </p>
      </div>
    </nav>

    <main class="mt-10 grid grid-flow-row grid-cols-4 gap-8">
      <TasksList class="col-span-3" />
      <UserList />
    </main>
  </div>
</template>

<script>
export default {}
</script>
