---
date: 2024-04-22 08:46:26
title: 记vue3中h函数双向绑定问题
author: 秋谨
categories:
  - vue
tags:
  - JavaScript
  - vue
---
# 前言

在做一个`Vue`项目的时候，有时使用`h`函数不仅可以提高开发效率，而且在一些复杂的场景中也会有很大的优势。

# 数据双向绑定

在一个项目中， 由于用到h函数的比较少，而且在基本的模板渲染已经基本够用了，同时，即使用到了基本都是使用默认`modelValue`绑定，所以没注意到，如何自定义数据的双向绑定问题，如以下代码中，做一个反馈的数据弹窗，`ChatFeedback`是自定义的反馈组件，里面使用了`vue3.4+`新增的`defineModel`宏来定义一个`feedback`变量，期望用于数据的双向绑定，但是在我这里的代码中，由于h函数用到的比较少，所以对如何进行数据双向绑定，有一些错误的认识，导致数据双向绑定不生效，根据个人推测`modelValue`是对`v-model:value`的简写,所以也对自定义的`feedback`，推理成了`modelFeedback`,这是错误的，网上找了很多也没找到相关的内容，有的基本都是使用默认的`modelValue`双向绑定。

后来去官网看`h`， `defineModel`的解释,在[defineModel](https://cn.vuejs.org/api/sfc-script-setup.html#definemodel)中看到这句话 “在底层，这个宏声明了一个 model prop 和一个相应的值更新事件。如果第一个参数是一个字符串字面量，它将被用作 prop 名称；否则，prop 名称将默认为 `"modelValue"`。在这两种情况下，你都可以再传递一个额外的对象，它可以包含 prop 的选项和 model ref 的值转换选项。”

![image-20240422090857319](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20240422090857319.png)

⚔️错误代码

```tsx
      const checkList = ref<number[]>([1]);
      const feedback = ref('');
      await ElMessageBox({
        title: '您的反馈将帮助我们持续进步',
        message: () => h(ChatFeedback, {
          modelFeedback: feedback.value,// 此处造成了误解
          modelValue: checkList.value,
          'onUpdate:modelValue': (val: number[]) => {
            checkList.value = val;
          },
          'onUpdate:feedback': (val: string) => {
            feedback.value = val;
          }
        })
      });
```

🎉修正后的代码

```tsx
    const checkList = ref<number[]>([1]);
    const feedback = ref('您的反馈将帮助我们持续进步');
    await ElMessageBox({
    title: '您的反馈将帮助我们持续进步',
    message: () => h(ChatFeedback, {
      feedback: feedback.value,// 只需要变量名称即可
      modelValue: checkList.value,
      'onUpdate:modelValue': (val: number[]) => {
        checkList.value = val;
      },
      'onUpdate:feedback': (val: string) => {
        feedback.value = val;
      }
    })
    });
```



## `ChatFeedback`组件

```vue
<script setup lang="ts">
const list = ref([
  {
    id: 1,
    title: '存在不安全或违法信息'
  },
  {
    id: 2,
    title: '存在不安全或违法信息'
  },
  {
    id: 3,
    title: '存在不安全或违法信息'
  }
]);
const model = defineModel({
  type: Array,
  default: () => ([])
});
const feedback = defineModel('feedback', {
  type: String,
  default: ''
});
watchEffect(() => {
  console.log(feedback.value);
});
</script>

<template>
  <div class="zk-p-2">
    <div>
      <el-checkbox-group v-model="model">
        <el-checkbox
          v-for="item in list"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        />
      </el-checkbox-group>
      <div>
        <el-input
          v-model="feedback"
          placeholder="您认为更优的答案应该是什么"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

```

## 预览结果

![image-20240422091326186](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20240422091326186.png)

