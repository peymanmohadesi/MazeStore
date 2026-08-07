import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E20054',
          light: '#e2246a',
          lighter: '#FCE5EE'
        },
        secondary: {
          DEFAULT: '#0A2A51'
        },
        surface: {
          white: '#ffffff',
          mainback: '#e9edf5'
        }
      }, 
      boxShadow: {
        header: '0 2px 2px 0 #00000014',
      },
      borderRadius: {
        16: '16px'
      },
      fontSize: {
        1: "12px",
        2: "13px",
        3: "14px",
        4: "16px",
        5: "18px"
      }
    }
  }
}
