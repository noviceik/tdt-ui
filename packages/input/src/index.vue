<template>
  <div class="tdt-input">
    <el-input
      v-model="inputValue"
      :disabled="configuration.disabled"
      :type="configuration.iType ? configuration.iType : 'text'"
      :rows="configuration.rows ? configuration.rows : 2"
      :autosize="configuration.autosize"
      :maxlength="configuration.maxlength"
      :minlength="configuration.minlength"
      :show-word-limit="configuration.showWordLimit"
      :prefix-icon="configuration.prefixIcon"
      :suffix-icon="configuration.suffixIcon"
      :placeholder="`请输入${configuration.label}`"
      :show-password="configuration.isPassword"
      :clearable="configuration.clearable"
      :size="configuration.size ? configuration.size : 'mini'"
      style="width: 100%"
      @blur="(...arg) => (configuration.blur ? configuration.blur(...arg, configuration) : null)"
      @focus="(...arg) => (configuration.focus ? configuration.focus(...arg, configuration) : null)"
      @change="
        (...arg) => (configuration.change ? configuration.change(...arg, configuration) : null)
      "
      @input="(...arg) => (configuration.input ? configuration.input(...arg, configuration) : null)"
      @clear="(...arg) => (configuration.clear ? configuration.clear(...arg, configuration) : null)"
    >
      <template slot="suffix"><slot name="suffix"></slot></template>
      <template slot="prefix"><slot name="prefix"></slot></template>
      <template slot="prepend"><slot name="prepend"></slot></template>
      <template slot="append"><slot name="append"></slot></template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'tdtInput',
  props: { configuration: Object, value: String },
  data() {
    return {};
  },
  computed: {
    // 代理表单值
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.tdt-input {
  width: 100%;
}
</style>
