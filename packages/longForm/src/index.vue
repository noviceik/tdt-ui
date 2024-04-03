<template>
  <div class="tdt-long-form">
    <el-row class="tdt-long-form-row" :gutter="20">
      <el-form ref="form" :model="reactiveForm" :rules="formRules" label-width="auto">
        <el-col v-for="item in mapList" :key="item.field" :span="item.span ? item.span : 24">
          <el-form-item v-if="item.isShow" :label="item.label" :prop="item.field">
            <!-- input -->
            <tdt-input
              v-if="item.type === 'input'"
              :configuration="item"
              v-model="reactiveForm[item.field]"
            ></tdt-input>
            <!-- select -->
            <!-- <el-select
              v-if="item.type === 'select'"
              v-model="reactiveForm[item.field]"
              :disabled="item.disabled"
              :multiple="item.multiple"
              :filterable="item.filterable"
              :remote="item.remote"
              :loading="item.loading"
              :loadingText="item.loadingText"
              :noMatchText="item.noMatchText"
              :noDataText="item.noDataText"
              :allow-create="item.allowCreate"
              :reserve-keyword="item.reserveKeyword"
              :remote-method="query => item.remoteMethod(query, item)"
              :default-first-option="item.defaultFirst"
              :popper-append-to-body="item.appendToBody"
              :placeholder="`请选择${item.label}`"
              size="mini"
              clearable
              style="width: 100%"
              @blur="(...arg) => (item.blur ? item.blur(...arg) : null)"
              @focus="(...arg) => (item.focus ? item.focus(...arg) : null)"
              @change="(...arg) => (item.change ? item.change(...arg) : null)"
              @clear="(...arg) => (item.clear ? item.clear(...arg) : null)"
              @visible-change="(...arg) => (item.visibleChange ? item.visibleChange(...arg) : null)"
              @remove-tag="(...arg) => (item.removeTag ? item.removeTag(...arg) : null)"
            >
              <el-option
                v-for="oItem in item.options"
                :disabled="oItem.disabled"
                :key="oItem.value"
                :label="oItem.label"
                :value="oItem.value"
              ></el-option>
            </el-select> -->
            <tdt-select
              v-if="item.type === 'select'"
              :configuration="item"
              v-model="reactiveForm[item.field]"
            ></tdt-select>
            <!-- number -->
            <el-input-number
              v-if="item.type === 'number'"
              v-model="reactiveForm[item.field]"
              :disabled="item.disabled"
              :min="item.min ? item.min : -Infinity"
              :max="item.max ? item.max : Infinity"
              :step="item.step ? item.step : 1"
              :step-strictly="item.stepStrictly"
              :precision="item.precision"
              :controls="item.controls ? item.controls : true"
              :controls-position="item.controlsPosition ? item.controlsPosition : ''"
              :placeholder="`请输入${item.label}`"
              size="mini"
              @blur="(...arg) => (item.blur ? item.blur(...arg) : null)"
              @focus="(...arg) => (item.focus ? item.focus(...arg) : null)"
              @change="(...arg) => (item.change ? item.change(...arg) : null)"
            ></el-input-number>
            <!-- radio -->
            <el-radio-group
              v-if="item.type === 'radioGroup'"
              v-model="reactiveForm[item.field]"
              :disabled="item.disabled"
              size="mini"
              @input="(...arg) => (item.input ? item.input(...arg) : null)"
            >
              <el-radio
                v-for="oItem in item.options"
                :key="oItem.value"
                :label="oItem.value"
                :disabled="oItem.disabled"
                :border="oItem.border"
              >
                {{ oItem.label }}
              </el-radio>
            </el-radio-group>
            <!-- checkbox -->
            <el-checkbox-group
              v-if="item.type === 'checkboxGroup'"
              v-model="reactiveForm[item.field]"
              :disabled="item.disabled"
              :min="item.min"
              :max="item.max"
              size="mini"
              @change="(...arg) => (item.change ? item.change(...arg) : null)"
            >
              <el-checkbox
                v-for="oItem in item.options"
                :key="oItem.value"
                :label="oItem.value"
                :disabled="oItem.disabled"
                :border="oItem.border"
              >
                {{ oItem.label }}
              </el-checkbox>
            </el-checkbox-group>
            <el-switch
              v-if="item.type === 'switch'"
              v-model="reactiveForm[item.field]"
              :disabled="item.disabled"
              :active-text="item.activeText"
              :inactive-text="item.inactiveText"
              :active-color="item.activeColor"
              :inactive-color="item.inactiveColor"
              :active-value="item.activeValue"
              :inactive-value="item.inactiveValue"
              :validate-event="item.validateEvent"
              @change="(...arg) => (item.change ? item.change(...arg) : null)"
            ></el-switch>
            <el-date-picker
              v-if="item.type === 'date'"
              v-model="reactiveForm[item.field]"
              size="mini"
              type="date"
              clearable
              :placeholder="`请选择${item.label}`"
              style="width: 100%"
            ></el-date-picker>
            <!-- <el-upload
          v-if="item.type === 'upload'"
          :ref="`upload${item.field}`"
          action="#"
          list-type="picture-card"
          size="mini"
          :auto-upload="false"
          :file-list="item.fileList"
          :on-remove="handleRemove"
          :on-preview="handlePictureCardPreview"
          :on-change="
            (file, fileList) => {
              handleChange(file, fileList, item.field);
            }
          "
        >
          <i class="el-icon-plus"></i>
        </el-upload> -->
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'tdtLongForm',
  props: {
    mapList: Array, // 表单配置映射列表
    value: Object, // 表单数据
    rules: Object, // 表单验证规则
    // 修改值回调
    resetVal: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      formRules: {}, // 验证规则
    };
  },
  created() {
    // 添加必填验证
    this.mapList.forEach(item => {
      if (item.isRequired) {
        this.formRules[item.field] = [
          { required: true, message: `${item.label}不能为空`, trigger: 'change' },
        ];
      }
    });
    // 添加自定义验证
    if (this.rules) {
      for (const key in this.rules) {
        if (this.formRules[key] && Array.isArray(this.formRules[key])) {
          this.formRules[key].push(...this.rules[key]);
        } else {
          this.formRules[key] = [...this.rules[key]];
        }
      }
    }
  },
  computed: {
    // 代理表单值
    reactiveForm: {
      get() {
        const that = this;
        const proxy = new Proxy(that.value, {
          get(target, key) {
            return Reflect.get(target, key);
          },
          set(target, key, value) {
            that.resetVal(target, key, value);
            that.$emit('input', {
              ...target,
              [key]: value,
            });
            return true;
          },
        });
        return proxy;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    // 提交表单进行验证
    submitForm() {
      let formValid;
      // 表单验证
      this.$refs.form.validate(valid => {
        formValid = valid;
      });
      return formValid;
    },

    // 重置表单
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.tdt-long-form {
  width: 100%;
  .tdt-long-form-row {
    margin: 0 !important;
  }
}
</style>
