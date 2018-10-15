/**
 * ============================
 * @Author:   ChenBaDou
 * @Version:  1.0 
 * @DateTime: 2018.09.07
 * ============================
 */
<template>
    <div class="main">
        <ul class="center_box">
            <li v-for="(item,index) in myArr">
                <ol class="clearfix">
                    <li v-for="(item2,index2) in item" :class="{'blank':item2==9,'fl':true}" @click="moveSlider(index,index2)">
                        <span v-if="item2==9"></span>
                        <span v-else>{{item2}}</span>
                    </li>
                </ol>
            </li>
        </ul>
    </div>
</template>
<style src="../scss/main.scss" scoped lang="sass-loader"></style>
<script>
    export default{
        data(){
            return {
                myArr:[
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ]
            }
        },
        methods: {
            // 移动滑块
            moveSlider(firstCoordinate,secondCoordinate){
                let arr = this.myArr;
                // top
                if(firstCoordinate-1>=0){
                    if(arr[firstCoordinate-1][secondCoordinate]==9){
                        let a = arr[firstCoordinate-1][secondCoordinate];
                        arr[firstCoordinate-1][secondCoordinate] = arr[firstCoordinate][secondCoordinate];
                        arr[firstCoordinate][secondCoordinate] = a;
                        this.myArr = [];
                        this.myArr = arr;
                        this.isWin(this.myArr);
                        return false;
                    }
                }
                // right
                if(secondCoordinate+1<=2){
                    if(arr[firstCoordinate][secondCoordinate+1]==9){
                        let a = arr[firstCoordinate][secondCoordinate+1];
                        arr[firstCoordinate][secondCoordinate+1] = arr[firstCoordinate][secondCoordinate];
                        arr[firstCoordinate][secondCoordinate] = a;
                        this.myArr = [];
                        this.myArr = arr;
                        this.isWin(this.myArr);
                        return false;
                    }
                }
                // bottom
                if(firstCoordinate+1<=2){
                    if(arr[firstCoordinate+1][secondCoordinate]==9){
                        let a = arr[firstCoordinate+1][secondCoordinate];
                        arr[firstCoordinate+1][secondCoordinate] = arr[firstCoordinate][secondCoordinate];
                        arr[firstCoordinate][secondCoordinate] = a;
                        this.myArr = [];
                        this.myArr = arr;
                        this.isWin(this.myArr);
                        return false;
                    }
                }
                // left
                if(secondCoordinate-1>=0){
                    if(arr[firstCoordinate][secondCoordinate-1]==9){
                        let a = arr[firstCoordinate][secondCoordinate-1];
                        arr[firstCoordinate][secondCoordinate-1] = arr[firstCoordinate][secondCoordinate];
                        arr[firstCoordinate][secondCoordinate] = a;
                        this.myArr = [];
                        this.myArr = arr;
                        this.isWin(this.myArr);
                        return false;
                    }
                }
            },
            // 判断输赢
            isWin(arr){
                let winArr = [
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ];
                if(arr.toString()==winArr.toString()){
                    alert('YOU WIN!');
                }
            },
            // 打乱排序
            disorder(){
                // 二维数组转一维
                let arr = this.myArr.join(",").split(","),
                    i = arr.length;
                // 乱序
                while (i) {
                    let j = Math.floor(Math.random() * i--);
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
                // 求打乱之后的数组的逆序数 通过逆序数判断奇偶排列
                console.log(this.calculateInverseNum(arr)%2==0);
                if(this.calculateInverseNum(arr)%2==0){
                    console.log('偶排列');
                }
                // 一维数组转二维
                var num = 3;//每个子数组里的元素个数
                var Arr = new Array(Math.ceil(arr.length/num));
                for(var a = 0; a<Arr.length;a++){
                    Arr[a] = new Array();
                    for(var j = 0; j<num; j++){
                        Arr[a][j] = '';
                    }
                }
                for(var a = 0; a<arr.length;a++){
                    Arr[parseInt(a/num)][a%num] = arr[a]; 
                } 
                console.log(Arr);
                this.myArr = [];
                this.myArr = Arr;
            },
            // 计算逆序数
            calculateInverseNum(arr){
                let treeArr = [],
                    count = 0;
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < treeArr.length; j++) {
                        if(treeArr[j]>arr[i]){
                            count++;
                        }
                        console.log('treeArr[j]',treeArr[j],'arr[i]',arr[i],'treeArr[j]>arr[i]',treeArr[j]>arr[i]);
                    }
                    treeArr.push(arr[i]);
                    console.log('treeArr',treeArr);
                }
                console.log('逆序数为'+count);
                return count;
            }
        },
        created(){
        },
        mounted(){
            this.disorder();
            // this.calculateInverseNum([4,2,1,3]);
        },
        computed: {
        },
        beforeDestroy(){
        },
        components: {}
    }
</script>