<template>
  <div class="switch">
      <div>
          <button>
              Foundations
          </button>
      </div>
      <div>
          <button>
              Categories
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Switch'
}
</script>

<style lang="scss" scoped>
    .switch {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 20%;
        background-color: red ;

        div {
            margin: 20px;

            button {
                padding: 20px;
            }
        }
    }
</style>
