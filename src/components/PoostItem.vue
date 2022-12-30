<template>
    <div id="poost">
        <div id="left">
            <img :src="'/assets/' + data.publisher" alt="">
        </div>

        <div id="right">
            <div id="top">{{ data.publisher }}</div>
            <div id="middle">
                <span>{{ data.body }}</span>
                <div>
                    <img :src="'/assets/' + data.pic" v-if="data.pic !== ''">
                </div>
            </div>
            <div id="bottom">
                <div class="icon">
                    <svg t="1671523444004" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="2726">
                        <path
                            d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z"
                            fill="#000000" p-id="2727"></path>
                    </svg>
                </div>
                <div class="icon">
                    <svg t="1671538844175" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="2872">
                        <path
                            d="M176 193c-17.673 0-32 14.327-32 32v481c0 17.673 14.327 32 32 32h27c51.915 0 94 42.085 94 94v45.5a1.94 1.94 0 0 0 3.293 1.388l117.045-114.176A94 94 0 0 1 482.976 738H848c17.673 0 32-14.327 32-32V225c0-17.673-14.327-32-32-32H176z m0-80h672c61.856 0 112 50.144 112 112v481c0 61.856-50.144 112-112 112H482.976a14 14 0 0 0-9.776 3.978L356.156 936.154c-32.394 31.6-84.271 30.956-115.87-1.437A81.94 81.94 0 0 1 217 877.5V832c0-7.732-6.268-14-14-14h-27c-61.856 0-112-50.144-112-112V225c0-61.856 50.144-112 112-112z m336 438c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m228 0c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z m-456 0c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64z"
                            fill="#333333" p-id="2873"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="scss" scoped>
#poost {
    width: 100%;
    display: flex;
    padding: 1em;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    font-size: 12px;

    #left {
        width: 4em;
        height: 4em;
        margin-right: 0.5em;
        display: flex;

        img {
            border-radius: 50%;
        }
    }

    #right {
        width: 100%;
        min-width: 0;
        margin-left: 0.5em;
        display: flex;
        flex-direction: column;

        #top {
            font-size: 1.5rem;
        }

        #middle {
            margin: 1em 0;
            display: flex;
            flex-direction: column;

            span {
                width: 100%;
                margin-bottom: 1em;
                display: block;
                word-break: normal;
                word-wrap: break-word;
                white-space: pre-line;
                overflow: hidden;
            }

            div {
                width: 100%;
                display: flex;

                img {
                    width: 100%;
                    border-radius: 1rem;
                }
            }
        }

        #bottom {
            padding-right: 15em;
            display: flex;

            .icon svg {
                width: 1.8em;
                height: 1.8em;
                margin-right: 5em;
                fill: black;
            }
        }
    }
}

#poost:hover {
    background-color: rgba(0, 0, 0, 10%);
}
</style>