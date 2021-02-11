<template>
    <div>
        <h4>新建分类</h4>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="名称" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { getCategory } from '../api/category'

interface IModel {
    name : string
}

export default defineComponent({
    
    setup() {
        const model = reactive<IModel>({
            name:''
        })
        const save = async function() {
            const res = await getCategory(model)
            console.log(res.data)
        }


        return {
            model,
            save
        }
    }

})
</script>