
module.exports ={

    mode: 'development',
    module:{
        rules:[
            {
                test: /\.thml$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    }


}