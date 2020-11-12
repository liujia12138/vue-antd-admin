<template>
  <a-table :columns="columns" :data-source="dataList" rowKey="age">
    <span slot="action">
      <a><a-icon type="edit" /> Edit</a>
      <a-divider type="vertical" />
      <a><a-icon type="delete" /> Delete</a>
    </span>
  </a-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NormalTable extends Vue {
  dataList = []
  columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
  ]
  created() {
    this.$axios('/api/user/list').then((res: any) => {
      this.dataList = res.data.data.list
    })
  }
}
</script>