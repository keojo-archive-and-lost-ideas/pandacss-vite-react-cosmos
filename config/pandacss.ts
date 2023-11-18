import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  header: {
    "description": "header text style, to ensure line height and boldness",
    value: {
      fontFamily: 'Inter',
      fontWeight: '600',
      lineHeight: '24',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  },
  body: {
    description: 'The body text style - used in paragraphs',
    value: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None'
    }
  }
})