<!--
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-05-04 10:35:45
 *
 * @description 恶意不息
-->
<template>
  <div id="NoRestForTheWickedView" class="flex min-h-full">
    <nav class="w-48 overflow-y-scroll pt-4 ">
      <div
        v-for="item in itemList"
        :key="item.name"
        class="skillName py-2 text-center cursor-pointer rounded-md border-(2 solid gray) hover:border-red"
      >
        {{ item.name }}
      </div>
    </nav>
    <section class="p-4 flex-1">
      <div class="tag flex">
        <div
          :class="{ select: item.id === materialSelect }"
          v-for="item in materialList"
          :key="item.id"
          @click="f_select(item.id)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="filter mt-4">
        <label>护甲：<input type="text" /></label>
        <label>手套：<input type="text" /></label>
        <label>头盔：<input type="text" /></label>
        <label>裤子：<input type="text" /></label>
        <label for="type"
          >材质：
          <input type="text" />
          <select name="" id="type" class="hidden">
            <option value="" disabled>装备材质</option>
            <option value="布甲">布甲</option>
            <option value="皮甲">皮甲</option>
            <option value="金属网">金属网</option>
            <option value="铁板">铁板</option>
          </select>
        </label>
        <label for="suit"
          >套装：
          <input type="text" id="" list="suitList" />
        </label>
      </div>
      <div class="mt-4 bg-red flex">
        <div class="flex- bg-yellow">
        <table>
          <thead>
            <th>
              <td>上衣</td>
              <td>帽子</td>
              <td>裤子</td>
              <td>手套</td>
            </th>
          </thead>
          <tbody></tbody>
          <tfoot></tfoot>
        </table>
        </div>
        <div class="flex-4 bg-green"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 装备分类
const itemList = [
	{ id: 0, name: "装备" },
	{ id: 1, name: "武器" },
	{ id: 2, name: "指环" },
	{ id: 3, name: "符文" },
];
// 技能列表
const skillList = [
	{ id: 0, name: "下砸" },
	{ id: 1, name: "突刺" },
	{ id: 2, name: "旋转" },
	{ id: 3, name: "旋身击" },
	{ id: 4, name: "三重刃" },
	{ id: 5, name: "空中闪避" },
	{ id: 6, name: "闪遁穿刺" },
	{ id: 7, name: "切割螺旋" },
	{ id: 8, name: "三重扫击" },
	{ id: 9, name: "穿刺旋击" },
	{ id: 10, name: "闪电旋击" },
	{ id: 11, name: "激涌斩击" },
	{ id: 12, name: "跳跃斩击" },
	{ id: 13, name: "闪遁突击" },
	{ id: 14, name: "嘲讽突击" },
	{ id: 15, name: "蓄力突击" },
	{ id: 16, name: "冰霜突击" },
	{ id: 17, name: "疫毒突击" },
	{ id: 18, name: "转步突击" },
	{ id: 19, name: "霹雳突击" },
	{ id: 20, name: "穿刺乱舞" },
	{ id: 21, name: "烈火乱舞" },
	{ id: 22, name: "粉碎乱舞" },
	{ id: 23, name: "闪电乱舞" },
	{ id: 24, name: "旋风疾冲" },
	{ id: 25, name: "切割疾冲" },
	{ id: 26, name: "冰霜疾冲" },
	{ id: 27, name: "穿刺疾冲" },
	{ id: 28, name: "疫毒疾冲" },
	{ id: 29, name: "凶猛疾冲" },
	{ id: 30, name: "闪电漩涡" },
	{ id: 31, name: "疫毒漩涡" },
	{ id: 32, name: "寒冰漩涡" },
	{ id: 33, name: "烈火漩涡" },
	{ id: 34, name: "疫毒投掷" },
	{ id: 35, name: "寒冰投掷" },
	{ id: 36, name: "烈火投掷" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
	{ id: 0, name: "1" },
];
/**
 * @description 材质选择
 */
const materialList = [
	{ id: "clothArmor", name: "布甲" },
	{ id: "leather", name: "皮甲" },
	{ id: "metalMesh", name: "金属网" },
	{ id: "iron", name: "铁板" },
];
const materialSelect = ref<string>("");
function f_select(id: string) {
	materialSelect.value = id;
}
</script>

<style scoped lang="scss">
#NoRestForTheWickedView {
  input {
    display: block;
  }
  .skillName {
    &:hover {
      // border:1px solid gray;
    }
  }
  .tag {
    div {
      @apply px-2.5 py-0.5 border-1 border-solid border-gray-500 mx-2 rounded-md cursor-pointer first:ml-0;
    }
    .select {
      @apply border-red;
    }
  }
  .filter {
    @apply grid grid-cols-3 gap-4;
    label {
      @apply mr-4 flex text-nowrap items-center;
      input {
        // @apply w-36;
        @apply h-9 bg-[unset] border-1 border-solid border-black dark:border-white outline-none px-3 py-1 dark:text-white rounded-md;
      }
    }
  }
  nav::-webkit-scrollbar {
    display: none;
    width: 8px;
  }
  nav::-webkit-scrollbar-track {
    background-color: white;
  }
  nav::-webkit-scrollbar-thumb {
    background-color: #636363;
    border-radius: 6px;
  }
}
</style>
