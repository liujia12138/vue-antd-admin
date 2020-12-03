<template>
  <div>
    <!-- 基础表单 -->
    <a-card>
      <a-form-model
        ref="form"
        :model="form"
        :rules="rules"
        labelAlign="left"
        :labelCol="{ span: 3 }"
        :wrapper-col="{ span: 15 }"
      >
        <a-form-model-item label="username" prop="username">
          <a-input v-model="form.username"></a-input>
        </a-form-model-item>

        <a-form-model-item label="email" prop="email">
          <a-input v-model="form.email" />
        </a-form-model-item>

        <a-form-model-item label="date" prop="date">
          <a-date-picker v-model="form.date" style="width: 100%" />
        </a-form-model-item>

        <a-form-model-item label="open" prop="open">
          <a-switch v-model="form.open" />
        </a-form-model-item>

        <a-form-model-item label="type" prop="type">
          <a-checkbox-group v-model="form.type">
            <a-checkbox :value="1" name="type">one</a-checkbox>
            <a-checkbox :value="2" name="type">two</a-checkbox>
            <a-checkbox :value="3" name="type">three</a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>

        <a-form-model-item label="rate" prop="rate">
          <a-rate v-model="form.rate" :tooltip="desc" />
          <span class="ant-rate-text">{{ desc[form.rate - 1] }}</span>
        </a-form-model-item>

        <a-form-model-item :wrapper-col="{ span: 15, offset: 3 }">
          <a-button type="primary" @click="submit">submit</a-button>
          <a-button style="margin-left: 10px" @click="reset">reset</a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
  form = {
    username: '',
    email: '',
    date: '',
    open: true,
    type: [1],
    rate: 4,
  }

  desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

  rules = {
    username: [
      {
        required: true,
        message: 'Please Input Username',
        trigger: 'blur',
      },
    ],
    email: [
      {
        required: true,
        type: 'email',
        message: 'Please Input Your Email',
        trigger: 'blur',
      },
    ],
    date: [
      {
        required: true,
        message: 'Please Pick a Date',
      },
    ],
  }

  public reset() {
    this.$refs.form.resetFields()
  }

  public submit() {
    this.$refs.form.validate((valid)=>{
      if(valid){
        this.$message.success('success')
      }
    })
  }
}
</script>