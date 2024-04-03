<template>
  <div id="app">
    <tdt-long-Form :mapList="mapListRef" v-model="formObj" :resetVal="resetVal"></tdt-long-Form>

    <tdt-select :configuration="configuration" v-model="inputValue"></tdt-select>
  </div>
</template>

<script>
import { mapListRef } from './constant/formData.js';

export default {
  name: 'App',
  data() {
    return {
      formObj: {},
      mapListRef,
      configuration: {
        label: '美食',
        field: 'food',
        type: 'select',
        disabled: false,
        isShow: true,
        isRequired: true,
        span: 12,
        multiple: true,
        filterable: true,
        remote: true,
        reserveKeyword: true,
        loading: true,
        loadingText: 'loading...',
        remoteMethod: (query, own) => {
          this.remoteMethod(query, own);
        },
        options: [],
        change: (...arg) => this.inputChange(...arg),
      },
      inputValue: [],
    };
  },
  created() {
    this.mapListRef.forEach(item => {
      this.formObj[item.field] = undefined;
      if (item.type === 'checkboxGroup') {
        this.formObj[item.field] = [];
      }
    });
  },
  methods: {
    resetVal(obj, key, val) {
      console.log(key, val);
    },

    inputChange(val) {
      console.log('val', val);
      console.log('inputValue', this.inputValue);
    },

    remoteMethod(query, own) {
      console.log('query', query);
      setTimeout(() => {
        own.loading = false;
        own.options = [
          {
            value: '1',
            label: '黄金糕',
          },
          {
            value: '2',
            label: '双皮奶',
          },
          {
            value: '3',
            label: '蚵仔煎',
          },
          {
            value: '4',
            label: '龙须面',
          },
          {
            value: '5',
            label: '北京烤鸭',
          },
        ];
      }, 1000);
    },
  },
};
</script>
