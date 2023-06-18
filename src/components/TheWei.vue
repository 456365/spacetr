<template>
	<h2>马威的购物车</h2>
	<div class="item" v-for="(v, i) in arr" :key="v.id">
		<span>{{ i + 1 }}</span>
		<span>{{ v.name }}</span>
		<span>{{ v.price }}</span>
		<span>{{ v.count }}</span>
		<span>{{ v.desc }}</span>
		<span><button @click="del(i)">删除</button></span>
	</div>
	<h2>总价格：{{ total }}</h2>
</template>

<script >
	export default {
		computed: {
			total(){
				let sum=0;
				for(let v of this.arr){
					sum += v.price*v.count;
				}
				return sum;
			}
		},
		methods: {
			del(i){
				this.arr.splice(i,1);
			}
		},
		data() {
			return {
				arr: [
					{
						id: 1,
						name: "苹果",
						price: 7,
						count: 3,
						desc: "烟台苹果",
					},
					{
						id: 2,
						name: "荔枝",
						price: 13,
						count: 5,
						desc: "这是荔枝",
					},
					{
						id: 3,
						name: "西瓜",
						price: 17,
						count: 2,
						desc: "这是大西瓜",
					},
					{
						id: 4,
						name: "桔子",
						price: 6,
						count: 8,
						desc: "这是桔子",
					},
				],
			};
		},
	};
</script>

<style scoped>
	.item{
		background-color: bisque;
		margin: 8px;
		display: flex;
	}
	.item span{
		min-width: 150px;
		text-align: center;
		line-height: 33px;
		background-color: coral;
		margin-left: 13px;
	}
</style>

