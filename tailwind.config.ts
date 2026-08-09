import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E20054',
          light: '#e2246a',
          sociallight: '#F180A9',
          lighter: '#FCE5EE',
          lighten: '#fce5ee65'
        },
        secondary: {
          DEFAULT: '#0A2A51'
        },
        surface: {
          white: '#ffffff',
          mainback: '#e9edf5',
          gray: '#445A74',
          lightgray: '#647E9A',
          darkgray: '#253343',
          lighter: '#F5F7FA',
          grayblue: '#57728E',
          darkblue: '#30445B',
          socialback: '#6783A0'
        }
      }, 
      boxShadow: {
        header: '0 2px 2px 0 #00000014',
      },
      borderRadius: {
        6: '6px',
        8: "8px",
        12: '12px',
        13: '13px',
        16: '16px',
        24: '24px'
      },
      fontSize: {
        1: "12px",
        2: "13px",
        3: "14px",
        4: "16px",
        5: "18px",
        6: "20px",
        7: "24px",
        8: "8px"
      }
    }
  }
}
