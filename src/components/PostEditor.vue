<template>
    <div class="col-full push-top">
          <form @submit.prevent="save">
              <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea v-model="text" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
              </div>
              <div class="btn-group">
                <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
              </div>
          </form>
      </div>
</template>

<script>
export default {
    data(){
        return{
            text: ''
        }
    },
    methods:{
        save(){
            const post = {
                text: this.text
            }
            this.$emit('save', { post });

            this.text = '';
        }
    }
}
</script>