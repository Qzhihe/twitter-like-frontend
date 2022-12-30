<template>
    <div id="main">
        <div id="header">
            <span>最新动态</span>
        </div>

        <div id="post-box">
            <div id="pic-box">
                <img :src="'/assets/' + headPic" alt="">
            </div>
            <div id="input-box">
                <div id="content">
                    <input type="text" v-model="body" placeholder="有什么新鲜事？">
                </div>
                <div id="fn">
                    <input type="file" ref="fileInput" style="display: none;" multiple @change="upload">

                    <div class="icon" @click="getFile">
                        <svg t="1671523545084" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="3732" width="2em" height="2em">
                            <path
                                d="M928 896H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v116.864a32 32 0 1 1-64 0V192H128v640h768V468.544l-206.336 244.736a31.968 31.968 0 0 1-44.896 4l-196.064-162.752-194.656 180.224a31.936 31.936 0 1 1-43.456-46.944l215.232-199.296a32.032 32.032 0 0 1 42.176-1.152l193.216 160.384 242.336-287.456a32.128 32.128 0 0 1 35.424-9.44c12.608 4.608 21.024 16.64 21.024 30.08V864a32 32 0 0 1-32 32z"
                                p-id="3733"></path>
                            <path
                                d="M304 480C242.24 480 192 429.76 192 368S242.24 256 304 256 416 306.24 416 368 365.76 480 304 480z m0-160c-26.464 0-48 21.536-48 48S277.536 416 304 416s48-21.536 48-48-21.536-48-48-48z"
                                p-id="3734"></path>
                        </svg>
                    </div>

                    <button type="submit" @click="submit">发布</button>
                </div>
                <div id="preview">
                    <img :src="previewUrl" v-if="previewUrl !== ''">
                </div>
            </div>
        </div>

        <poost-item v-for="poost in poosts" :key="poost.id" :data="poost"
            @click.native="showDetail(poost.id)"></poost-item>
    </div>
</template>

<script>
import PoostItem from '@/components/PoostItem'

export default {
    name: 'HomePage',
    components: { PoostItem },
    data() {
        return {
            tag: '',
            body: '',
            previewUrl: '',
            formData: undefined
        }
    },
    computed: {
        poosts() {
            return this.$store.state.poosts
        },
        headPic() {
            return this.$store.state.curUser.headPic
        },
        isBlurActive() {
            return this.$store.state.isBlurActive
        }
    },
    methods: {
        display() {
            this.$axios({
                method: 'post',
                url: 'http://localhost:8090/Poost',
                data: {
                    type: 'display',
                }
            }).then(res => {
                if (res.status === 200) {
                    this.$store.commit('setPoosts', res.data.poosts)
                }
            })
        },
        submit(event) {
            event.preventDefault()

            this.$axios({
                method: 'post',
                url: 'http://localhost:8090/AddPoost',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    publisher: this.$store.state.curUser.logName,
                    tag: this.tag,
                    body: this.body,
                    pic: this.formData.get('file')
                }
            }).then(res => {
                if (res.status === 200) {
                    this.body = ''
                    this.previewUrl = ''
                    this.formData = undefined

                    this.display()
                }
            }).catch(err => {
                console.log(err)
            })
        },
        getFile() {
            this.$refs.fileInput.click()
        },
        preview(file) {
            return new Promise((resolve) => {
                let read = new FileReader()
                read.readAsDataURL(file)
                read.onload = function () {
                    resolve(this.result)
                }
            })
        },
        upload(event) {
            event.preventDefault()

            const that = this

            this.formData = new FormData()
            let file = event.target.files[0]

            this.formData.append('file', file)
            this.preview(file).then(res => {
                that.previewUrl = res
            })
        },
        showDetail(poostId) {
            this.$router.push('/poost/' + poostId)
        }
    },
    mounted() {
        this.display()
    },
}
</script>

<style lang="scss" scoped>
#main {
    width: 30%;
    min-width: 300px;
    position: absolute;
    left: 35%;

    #header {
        width: 100%;
        display: flex;
        border-right: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        font-size: 16px;

        span {
            padding: 1rem;
            font-size: 2rem;
        }
    }

    #post-box {
        width: 100%;
        padding: 1em;
        display: flex;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
        font-size: 12px;

        #pic-box {
            width: 4em;
            height: 4em;
            margin-right: 0.5em;
            display: flex;

            img {
                border-radius: 50%;
            }
        }

        #input-box {
            width: 100%;
            margin-left: 0.5em;
            display: flex;
            flex-direction: column;
            line-height: 4em;

            #content {
                margin-left: 0.4rem;
                font-size: 1rem;

                input {
                    width: 100%;
                    border: none;
                }

                input:focus {
                    outline: none;
                }
            }

            #fn {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.5em;

                .icon {
                    width: 3em;
                    height: 3em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;

                    svg {
                        width: 1.8em;
                        height: 1.8em;
                        fill: rgb(42, 130, 228);
                    }

                    &:hover {
                        background-color: rgba(42, 130, 228, 0.3);
                    }
                }

                button {
                    width: 5em;
                    height: 3em;
                    border: none;
                    border-radius: 5em;
                    color: white;
                    background-color: rgba(42, 130, 228, 0.6);

                    &:hover {
                        background-color: rgba(42, 130, 228, 0.8);
                    }
                }
            }

            #preview {
                margin-top: 1em;
                display: flex;

                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>