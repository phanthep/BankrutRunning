<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card>
        <v-card-title :class="['text-h6', `bg-${item.color}`]">
          {{item.step}}
        </v-card-title>
        <v-card-text class="bg-white text--primary">
          <p>กรุณากรอกข้อมูลของท่านเพื่อเป็นข้อมูลสำหรับลงทะเบียนวิ่ง</p>
          <v-btn
            :color="item.color"
            variant="outlined"
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red-lighten-2',
          icon: 'mdi-star',
          step: 'กรอกข้อมูล'
        },
        {
          color: 'purple-lighten-2',
          icon: 'mdi-book-variant',
          step: 'เลือกระยะวิ่ง'
        },
        {
          color: 'green-lighten-1',
          icon: 'mdi-airballoon',
          step: 'เลือกเสื้อ'
        },
        {
          color: 'blue-lighten-1',
          icon: 'mdi-airballoon',
          step: 'ชำระเงิน'
        },
        {
          color: 'indigo-lighten-2',
          icon: 'mdi-layers-triple',
          step: 'รอการอนุมัติ'
        },
      ],
    }),
  }
</script>