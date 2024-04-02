import { describe, it, expect } from 'vitest'
import { trimObject } from '../src/object-trim'
import { uuidv4 } from '@uniiem/uuid'

describe('trim objecet', () => {
  const case_list = [
    {
      'case': 1,
      'id': uuidv4(),
      'role': 'user',
      'content': 'How is the weather today?'
    },
    {
      'case': 2,
      'id': uuidv4(),
      'role': 'assistant',
      'content': 'It is sunny today.'
    },
    {
      'case': 3,
      'id': uuidv4(),
      'role': 'user',
      'content': 'What is the temperature?'
    },
    {
      'case': 4,
      'id': uuidv4(),
      'role': 'assistant',
      'content': 'It is 25 degrees.'
    }
  ]

  it('by "content" length 20', () => {
    const result = trimObject(case_list, 20, { keys: ['content'] })
    expect(result).toHaveLength(1)
    expect(result[0].case).toBe(4)
  })

  it('by "content" length 50', () => {
    const result = trimObject(case_list, 50, { keys: ['content'] })
    expect(result).toHaveLength(2)
    expect(result.map(item => item.case)).toEqual([3, 4])
  })

  it('by "content" length 1000', () => {
    const result = trimObject(case_list, 1000, { keys: ['content'] })
    expect(result).toHaveLength(case_list.length)
    expect(result.map(item => item.case)).toEqual(case_list.map(item => item.case))
  })

  it('by "content" length 25 from start', () => {
    const result = trimObject(case_list, 25, { keys: ['content'], fromStart: true })
    expect(result).toHaveLength(1)
    expect(result[0].case).toBe(1)
  })

  it('by "content" length 45 from start', () => {
    const result = trimObject(case_list, 45, { keys: ['content'], fromStart: true })
    expect(result).toHaveLength(2)
    expect(result.map(item => item.case)).toEqual([1, 2])
  })

})
