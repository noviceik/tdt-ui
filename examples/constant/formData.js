import Vue from 'vue';

const mapList = [
  {
    label: '名称',
    field: 'name',
    type: 'input',
    disabled: false,
    isShow: true,
    isRequired: true,
    iType: 'textarea',
    rows: 3,
    span: 12,
  },
  {
    label: '美食',
    field: 'food',
    type: 'select',
    disabled: false,
    isShow: true,
    isRequired: true,
    span: 12,
    filterable: true,
    allowCreate: true,
    multiple: true,
    options: [
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
    ],
  },
  {
    label: '年龄',
    field: 'age',
    type: 'number',
    disabled: false,
    isShow: true,
    isRequired: true,
    controlsPosition: 'right',
    span: 12,
  },
  {
    label: '日期',
    field: 'date',
    type: 'date',
    disabled: true,
    isShow: true,
    isRequired: true,
    span: 12,
  },
  {
    label: '大小',
    field: 'size',
    type: 'radioGroup',
    disabled: false,
    isShow: true,
    isRequired: true,
    span: 12,
    options: [
      {
        value: 1,
        label: '大',
      },
      {
        value: 2,
        disabled: true,
        label: '中',
      },
      {
        value: 3,
        border: true,
        label: '小',
      },
    ],
    input: function (e) {
      console.log(e);
    },
  },
  {
    label: '美食',
    field: 'foods',
    type: 'checkboxGroup',
    isShow: true,
    isRequired: true,
    span: 12,
    options: [
      {
        value: '1',
        label: '黄金糕',
      },
      {
        value: '2',
        disabled: true,
        label: '双皮奶',
      },
      {
        value: '3',
        border: true,
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
    ],
    change: function (e) {
      console.log(e);
    },
  },
];

const mapListRef = Vue.observable(mapList);

export { mapListRef };
