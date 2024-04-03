<template>
  <div class="tdt-select">
    <el-select
      v-model="selectValue"
      :multiple="configuration.multiple"
      :disabled="configuration.disabled"
      :collapse-tags="configuration.collapseTags"
      :multiple-limit="configuration.multipleLimit"
      :filterable="configuration.filterable"
      :filter-method="configuration.filterMethod"
      :remote-method="query => configuration.remoteMethod(query, configuration)"
      :remote="configuration.remote"
      :loading="configuration.loading"
      :loadingText="configuration.loadingText"
      :no-match-text="configuration.noMatchText"
      :no-data-text="configuration.noDataText"
      :allow-create="configuration.allowCreate"
      :reserve-keyword="configuration.reserveKeyword"
      :default-first-option="configuration.defaultFirst"
      :popper-append-to-body="configuration.appendToBody"
      :automatic-dropdown="configuration.autoDropdown"
      :placeholder="`请选择${configuration.label}`"
      :size="configuration.size ? configuration.size : 'mini'"
      :clearable="configuration.clearable"
      style="width: 100%"
      @blur="(...arg) => (configuration.blur ? configuration.blur(...arg, configuration) : null)"
      @focus="(...arg) => (configuration.focus ? configuration.focus(...arg, configuration) : null)"
      @change="(...arg) => (configuration.change ? configuration.change(...arg, configuration) : null)"
      @clear="(...arg) => (configuration.clear ? configuration.clear(...arg, configuration) : null)"
      @visible-change="
        (...arg) => (configuration.visibleChange ? configuration.visibleChange(...arg, configuration) : null)
      "
      @remove-tag="(...arg) => (configuration.removeTag ? configuration.removeTag(...arg, configuration) : null)"
    >
      <el-option
        v-for="oItem in configuration.options"
        :disabled="oItem.disabled"
        :key="oItem.value"
        :label="oItem.label"
        :value="oItem.value"
      ></el-option>
      <template slot="prefix"><slot name="prefix"></slot></template>
      <template slot="empty"><slot name="empty"></slot></template>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'tdtSelect',
  props: { configuration: Object, value: [String, Array] },
  data() {
    return {};
  },
  computed: {
    // 代理表单值
    selectValue: {
      get() {
        const that = this;
        if (typeof that.value === 'object') {
          const proxy = new Proxy(that.value, {
            get(target, key) {
              return Reflect.get(target, key);
            },
            set(target, key, value) {
              that.$emit('input', {
                ...target,
                [key]: value,
              });
              return true;
            },
          });
          return proxy;
        } else {
          return that.value;
        }
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.tdt-select {
  width: 100%;
}
</style>
