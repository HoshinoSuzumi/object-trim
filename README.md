# @uniiem/object-trim

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/HoshinoSuzumi/object-trim/ci.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40uniiem%2Fobject-trim)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40uniiem%2Fobject-trim/latest)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40uniiem%2Fobject-trim)
![GitHub License](https://img.shields.io/github/license/HoshinoSuzumi/object-trim)

Calculate and trim object size by specifying properties

It can be used for the context length limit of LLM Chatbot histories.

## Usage

```bash
npm i @uniiem/object-trim
```

```typescript
// import trimObject
import { trimObject } from '@uniiem/object-trim'

// A object list, e.g. LLM chatbot history
const case_obj_list = [
  {
    id: 'fb3dd9ed-52bf-4aff-b4be-2ac9ddc95319',
    role: 'user',
    content: 'How is the weather today?'
  },
  {
    id: '33643516-554b-453c-8375-4e032fe07232',
    role: 'assistant',
    content: 'It is sunny today.'
  },
  {
    id: '78af377f-aa79-453a-b0df-0ef702c8f3a6',
    role: 'user',
    content: 'What is the temperature?'
  },
  {
    id: '3d722395-3ab8-423f-a290-9a132a3c6dd7',
    role: 'assistant',
    content: 'It is 25 degrees.'
  }
]

// Trim the object list by the key 'content' and max length 50
const trimmed_obj_list = trimObject(case_obj_list, 50, { keys: ['content'] })
console.log(trimmed_obj_list)

// output
/*
  [
    {
      id: '78af377f-aa79-453a-b0df-0ef702c8f3a6',
      role: 'user',
      content: 'What is the temperature?'
    },
    {
      id: '3d722395-3ab8-423f-a290-9a132a3c6dd7',
      role: 'assistant',
      content: 'It is 25 degrees.'
    }
  ]
 */
```

## API

### trimObject(objectList, maxLength, TrimObjectProperties[])

```typescript
const trimObject: <T>(objectList: T[], maxLength: number, props: TrimObjectProperties<T>) => T[];

interface TrimObjectProperties<T> {
    keys: (keyof T)[];
    fromStart?: boolean;  // default: false
}
```
