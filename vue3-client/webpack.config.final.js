{
  mode: 'development',
  context: '/home/adnan/code/thewisebook/vue3-client',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/home/adnan/code/thewisebook/vue3-client/dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/home/adnan/code/thewisebook/vue3-client/src',
      vue$: 'vue/dist/vue.esm-bundler.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/home/adnan/code/thewisebook/vue3-client/node_modules',
      '/home/adnan/code/thewisebook/vue3-client/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: (locator, filter) => process.versions.pnp ? {
          apply: makeResolver(locator, filter),
        } : {
          apply: nothing,
        },
        moduleLoader: module => process.versions.pnp ? {
          apply: makeResolver(getModuleLocator(module)),
        } : {
          apply: nothing,
        },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: (filter, module, dependency) => process.versions.pnp ? {
          apply: makeResolver(dependency ? getDependencyLocator(getModuleLocator(module), dependency) : getModuleLocator(module), filter),
        } : {
          apply: nothing,
        },
        tsLoaderOptions: (options = {}) => process.versions.pnp ? Object.assign({}, options, {
          resolveModuleName: resolveModuleName,
          resolveTypeReferenceDirective: resolveModuleName,
        }) : options,
        forkTsCheckerOptions: (options = {}) => process.versions.pnp ? Object.assign({}, options, {
          resolveModuleNameModule: require.resolve(`./ts`),
          resolveTypeReferenceDirectiveModule: require.resolve(`./ts`),
        }) : options
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/home/adnan/code/thewisebook/vue3-client/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/home/adnan/code/thewisebook/vue3-client/node_modules',
      '/home/adnan/code/thewisebook/vue3-client/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/home/adnan/code/thewisebook/vue3-client/node_modules/.cache/vue-loader',
              cacheIdentifier: '0bc0fe9a'
            }
          },
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-loader-v16/dist/index.js',
            options: {
              cacheDirectory: '/home/adnan/code/thewisebook/vue3-client/node_modules/.cache/vue-loader',
              cacheIdentifier: '0bc0fe9a',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function creator() {
                      var transformer = initializer.apply(void 0, arguments);
                      transformer.postcssPlugin = name;
                      transformer.postcssVersion = new _processor.default().version;
                      return transformer;
                    }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          filepath => {
                      // always transpile js in vue files
                      if (/\.vue\.jsx?$/.test(filepath)) {
                        return false
                      }
                      // exclude dynamic entries from cli-service
                      if (filepath.startsWith(cliServicePath)) {
                        return true
                      }
          
                      // only include @babel/runtime when the @vue/babel-preset-app preset is used
                      if (
                        process.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME &&
                        filepath.includes(path.join('@babel', 'runtime'))
                      ) {
                        return false
                      }
          
                      // check if this is something the user explicitly wants to transpile
                      if (transpileDepRegex && transpileDepRegex.test(filepath)) {
                        return false
                      }
                      // Don't transpile node_modules
                      return /node_modules/.test(filepath)
                    }
        ],
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/home/adnan/code/thewisebook/vue3-client/node_modules/.cache/babel-loader',
              cacheIdentifier: '237c8baa'
            }
          },
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/home/adnan/code/thewisebook/vue3-client/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/home/adnan/code/thewisebook/vue3-client/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '0a58e41e',
              emitWarning: false,
              emitError: false,
              eslintPath: '/home/adnan/code/thewisebook/vue3-client/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          error => {
            if (error.webpackError) {
              const message = typeof error.webpackError === 'string'
                ? error.webpackError
                : error.webpackError.message || ''
              for (const { re, msg, type } of rules) {
                const match = message.match(re)
                if (match) {
                  return Object.assign({}, error, {
                    // type is necessary to avoid being printed as default error
                    // by friendly-error-webpack-plugin
                    type,
                    shortMessage: msg(error, match)
                  })
                }
              }
              // no match, unknown webpack error without a message.
              // friendly-error-webpack-plugin fails to handle this.
              if (!error.message) {
                return Object.assign({}, error, {
                  type: 'unknown-webpack-error',
                  shortMessage: message
                })
              }
            }
            return error
          }
        ],
        additionalFormatters: [
          errors => {
            errors = errors.filter(e => e.shortMessage)
            if (errors.length) {
              return errors.map(e => e.shortMessage)
            }
          }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue3-client',
        templateParameters: (compilation, assets, pluginOptions) => {
          // enhance html-webpack-plugin's built in template params
          let stats
          return Object.assign({
            // make stats lazy as it is expensive
            get webpack () {
              return stats || (stats = compilation.getStats().toJson())
            },
            compilation: compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              files: assets,
              options: pluginOptions
            }
          }, resolveClientEnv(options, true /* raw */))
        },
        template: '/home/adnan/code/thewisebook/vue3-client/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/home/adnan/code/thewisebook/vue3-client/public',
          to: '/home/adnan/code/thewisebook/vue3-client/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('FFP') */
    {}
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  devtool: 'source-map'
}
