module.exports = {
  root: true,
  env: {
<<<<<<< HEAD
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
=======
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
<<<<<<< HEAD
    //semi dodany zeby naprawic problem
    //space before function tez
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never']
=======
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
<<<<<<< HEAD
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
=======
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
};
