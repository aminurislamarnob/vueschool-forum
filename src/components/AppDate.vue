<template>
    <span :title="humanReadableFormat()">{{formatedTime()}}</span>
</template>
<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default {
    props:{
        timeStamp: {
            required: true,
            type: Number
        }
    },
    methods:{
        formatedTime(){
            return dayjs.unix(this.timeStamp).fromNow();
        },
        humanReadableFormat(){
            return dayjs.unix(this.timeStamp).format('llll');
        }
    }
}
</script>