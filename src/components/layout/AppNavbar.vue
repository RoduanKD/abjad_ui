<template>
  <div
    class="navbar is-fixed-top"
    :class="{'is-out': $store.state.hideNavbar }"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">
              الرئيسية
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'children.index' }">
              أطفالي
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="navbar-end is-flex is-flex-direction-column is-justify-content-center">
        <div
          v-if="$store.getters.isLoggedIn"
          class="image mb-3"
          style="cursor:pointer"
          @click="$router.push({ name: 'children.select' })"
        >
          <img
            :src="$store.state.child.image"
            :alt="$store.state.child.name"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style lang="scss">
.navbar {
  height: $navbar-height;
  line-height: 90px;
  color: var(--primary);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1410.76' height='106.84' viewBox='0 0 1410.76 106.84'%3E%3Cpath data-name='Path 3739' d='M1410.76 100.82a10.714 10.714 0 0 1-5.76-1.07c-5.29-3.1-10.89-9.36-18.16-9.33-4.82.02-8.78 2.56-13.14 5.6-6.33 4.38-7.129 10.82-18.94 10.82a21.178 21.178 0 0 1-12.475-3.85c-3.489-2.558-17.525-11.15-23.819-12.425-7.371-1.494-14.688-2.923-21.866-.68-18.779 5.867-25.14 17.154-44.84 10.635-12.3-4.07-18.17-8.92-32-12-11.27-2.51-18.59-2.44-30 0-5.53 1.19-20.26 5.03-27.05 8.5-18.27 9.35-31.95 8.5-46.95 8.5-9.52 0-45.17-5.57-52-9-21.36-10.71-58.83-12.61-80.91-3.2-.53.22-1.06.45-1.57.68-21.6 9.77-47.02 17.02-71.69 4.55-3.72-1.88-7.33-3.65-10.85-5.28-20.86-9.64-44.98-7.75-63.98-4.75a234.545 234.545 0 0 0-23 5c-20.5 5.62-34.72 11.56-56 12-10.44.21-26.25.04-35-4-5.23-2.41-6.4-2.25-11.81-5-12.84-6.42-25.85-10.76-40.19-10-12.43.62-24.11 6.34-34.11 11.33-11.74 5.85-22.32 7.67-35.89 7.67-20 0-36.56-1.15-51.98-8.25-5.47-2.52-10.93-5.16-16.49-7.54-14.58-6.25-30.88-3.31-44.53 1.79-19.57 7.32-31 14-57 14-11.04 0-27.11-3.07-37-8-10.14-5.06-14.99-11.14-27-11-9.94.11-18.5 3.85-27 9-17.31 10.49-42.62 12.98-63 7-13.93-4.09-15.72-7.25-29.09-11.93-15.91-5.56-22.91-8.07-47.85 4.97-21.23 11.1-38.6 14.95-64.57 6.8s-19.11-16.1-36.45-15.93-16.71 19.2-36.67 18.91-26.65-15.52-38.45-15.56C11.94 89.75 7.03 101 0 100.82.08 100.77 0 .06 0 .06c6.39.35 389.76.22 731.97.1 1.58-.01 3.16-.01 4.73 0 335.8.12 667.79.18 674.06-.16 0 0-.02 100.81 0 100.82Z' fill='%23e4f5ff'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  transition: transform .5s ease-out;

  nav ul {
    display: flex;
    li {
      list-style: none;
      padding: 0 20px;

      a {
        text-decoration: none;
        font-weight: bold;
        color: var(--primary);
      }
    }
  }

  &.is-out {
    transform: translateY(-100%);
  }
}
</style>
