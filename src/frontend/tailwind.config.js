import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                'romantic-glow': 'oklch(var(--romantic-glow) / <alpha-value>)',
                'soft-pink': 'oklch(var(--soft-pink) / <alpha-value>)',
                'peach': 'oklch(var(--peach) / <alpha-value>)',
                'blush': 'oklch(var(--blush) / <alpha-value>)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 0.5rem)',
                '2xl': 'calc(var(--radius) + 1rem)',
                '3xl': 'calc(var(--radius) + 1.5rem)'
            },
            fontFamily: {
                sans: ['Quicksand', 'Nunito', 'Poppins', 'system-ui', '-apple-system', 'sans-serif']
            },
            boxShadow: {
                'romantic': '0 0 20px oklch(var(--romantic-glow) / 0.4), 0 0 40px oklch(var(--romantic-glow) / 0.2)',
                'romantic-strong': '0 0 30px oklch(var(--romantic-glow) / 0.6), 0 0 60px oklch(var(--romantic-glow) / 0.3)'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
